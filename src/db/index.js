import { Sequelize, DataTypes, Model } from "@sequelize/core";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

export class Company extends Model {}
export class User extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "company" }
);

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      references: {
        model: Company,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "user" }
);

User.belongsTo(Company, { foreignKey: "companyId" });

await sequelize.sync();

export default {
  Company,
  User,
  sequelize
}