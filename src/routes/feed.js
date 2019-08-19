module.exports = (app) => {

    app.get('/feed', (req, res) => {
        res.json({ "route": "feed" });
    });
    
};