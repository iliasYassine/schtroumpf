

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');



const users = sequelize.define("users", {
 
  username:DataTypes.TEXT,
  email:DataTypes.TEXT,
  password:DataTypes.TEXT,

}
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = users;