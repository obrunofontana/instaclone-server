module.exports = (app) => {

    const Users = app.datasource.models.Users;

    app.route('/users')
        .get((req, res) => {
            Users.findAll()
                .then((result) => {
                    res.status(200).json({ users: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Users.create(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        });

    app.route('/users/:id')
        .all((req, res, next) => {

            switch (req.method) {
                case 'PATCH':
                    req.body.status = 'U';
                    break;

                case 'DELETE':
                    req.body.status = 'D';
                    break;
            }

            next();
        })
        .get((req, res) => {
            Users.findOne({ where: req.params })
                .then(result => {
                    if (result) {
                        res.json({ result });
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
        .delete((req, res) => {
            Users.destroy({ where: req.params })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
        .patch((req, res) => {
            console.log(req.body);

            Users.update(req.body, { where: req.params })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });
};