// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
//product belongs to Category
// set up fields and rules for Product model
Product.init(
  {
    // define columns (id=INTEGER,notnull,primary key,auto increment)(product_name=Decimal,notnull,validate value as numeric)(category_id=INTEGER,refrences category model id)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
