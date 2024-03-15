import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# Data types
# String
# Int
# Boolean
# Float
# ID => UUID v4

# Scalar types
# Query
# Mutation


# input
# type

  type Editor {
    name: String
    suma: Int
    fullName: String
    email: String
  }

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    editor: Editor
  }

  input CreateBookInput {
    title: String!
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    basic: String
  }

  type Mutation {
    # createBook(title: String, author: String): Book
    createBook(input: CreateBookInput!): Book
  }
`;

export default typeDefs;
