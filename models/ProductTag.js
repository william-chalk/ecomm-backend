const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns (id=Integer,notnull,primary key,auto increment)(product_id=INTEGER,refrences product model id)(tag_id=Integer,refrences tag model id)
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model:"product",
        key: "id"
      }
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
