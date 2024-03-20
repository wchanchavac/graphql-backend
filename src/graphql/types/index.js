import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

  type Company {
    id: ID! # Int
    name: String!
    # users: [User]
  }

  type User {
    id: ID! # Int
    firstName: String!
    lastName: String
    email: String!
    company: Company
  }

  input CreateCompanyInput {
    name: String!
  }
  

  input CreateUserInput {
    firstName: String!
    lastName: String = ""
    email: String!
    companyId: ID
  }

  input UpdateCompanyInput {
    id: ID!
    name: String
  }

  input UpdateUserInput {
    id: ID!
    firstName: String
    lastName: String
    email: String
    companyId: ID
  }

  type Query {
    companies: [Company]
    company(id: ID!): Company
    users: [User]
    user(id: ID!): User
  }


  type Mutation {
    createCompany(input: CreateCompanyInput!): Company
    createUser(input: CreateUserInput!): User
    updateCompany(input: UpdateCompanyInput!): Company
    updateUser(input: UpdateUserInput!): User
    deleteCompany(id: ID!): Company
    deleteUser(id: ID!): User
  }
`;

export default typeDefs;
