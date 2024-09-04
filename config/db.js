import sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new sequelize(process.env.DATABASE_URL,{
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});
export default db;