// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
import books from "../data/index.js";
import bd from "../../db/index.js";
const resolvers = {
  User: {
    async company(user, args, context) {
      console.log("🚀 ~ file: index.js:19 ~ company ~ user require company");
      return await user.getCompany();
    },
  },
  Query: {
    // async companies(root, args, context) {
    async companies(_, args, context) {
      // TODO: llamada a servicios

      return await bd.Company.findAll();
    },
    async company(_, { id }, context) {
      return await bd.Company.findByPk(id);
    },
    async user(_, { id }, context) {
      return await bd.User.findByPk(id);
    },

    async users(_, args, context) {
      return await bd.User.findAll();
    },
  },
  Mutation: {
    async createCompany(_, { input }, context) {
      console.log("🚀 ~ file: index.js:27 ~ createCompany ~ input:", input);

      return await bd.Company.create(input);
    },
    async createUser(_, { input }, context) {
      console.log("🚀 ~ file: index.js:33 ~ createUser ~ input:", input);

      return await bd.User.create(input);
    },
    async updateCompany(_, { input }, context) {
      console.log("🚀 ~ file: index.js:39 ~ updateCompany ~ input:", input);

      const company = await bd.Company.findByPk(input.id);
      return await company.update(input);
    },
    async updateUser(_, { input }, context) {
      console.log("🚀 ~ file: index.js:45 ~ updateUser ~ input:", input);

      const user = await bd.User.findByPk(input.id);
      return await user.update(input);
    },
    async deleteCompany(_, { id }, context) {
      console.log("🚀 ~ file: index.js:51 ~ deleteCompany ~ id:", id);

      const company = await bd.Company.findByPk(id);
      await company.destroy();
      return company;
    },
    async deleteUser(_, { id }, context) {
      console.log("🚀 ~ file: index.js:57 ~ deleteUser ~ id:", id);

      const user = await bd.User.findByPk(id);
      await user.destroy();
      return user;
    },
  },
};

export default resolvers;
