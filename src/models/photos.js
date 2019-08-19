module.exports = (sequelize, DataType) => {

    const Photos = sequelize.define('Photos', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        description: {
            type: DataType.STRING(20),            
            allowNull: false
        },        
        path: {
            type: DataType.STRING(254),          
            allowNull: false
        },
        status: {
            type: DataType.STRING(1),
        }
    });

    return Photos;
};