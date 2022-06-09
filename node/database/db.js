import { Sequelize } from "sequelize";
const db = new Sequelize('database_crud_react_node_sql', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
})
export default db