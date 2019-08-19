module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        username: {
            type: DataType.STRING(16), 
            unique: true,
            allowNull: false
        },        
        password: {
            type: DataType.STRING(16),          
            allowNull: false
        },
        email: {
            type: DataType.STRING(16),          
            allowNull: false
        },
        following: {
            type: DataType.ARRAY(DataType.INTEGER)
        },
        status: {
            type: DataType.STRING(1)
        }
    });

    return Users;
};