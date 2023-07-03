

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');



const role = sequelize.define("schtroumf", {
  role: DataTypes.TEXT,
  

}
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = role;