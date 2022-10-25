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
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    product_name:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1]
      }
    },
    price:{
      type:DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate:{
        isDecimal : true
      }
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric: true
      }
    },
    category_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: "category",
        key: "id",
      },
    },
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
