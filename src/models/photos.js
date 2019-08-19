module.exports = (sequelize, DataType) => {

   // const Users = require('./users.js');
    const Photos = sequelize.define('Photos', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },
        user: {
            type: DataType.INTEGER            
        },
        description: {
            type: DataType.STRING(20),            
            allowNull: false
        },        
        path: {
            type: DataType.STRING(254)
        },
        status: {
            type: DataType.STRING(1),
        }
    });

   // Photos.belongsTo(Users);

    return Photos;
};