const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}
//Category is a one-many for products 1 category can have multiple products
Category.init(
  {
    // define columns (id =Integer,notnull,primary key,auto increment),(category_name = String,notnull)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
