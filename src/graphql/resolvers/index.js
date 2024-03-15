// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
import books from "../data/index.js";
const resolvers = {
  Editor: {
    suma: ()=> 100+100,
    fullName: (editor, args, ctx) => {
      console.log("🚀 ~ editor:", editor)
      return `${editor.name} - ${editor.email}`;
    },
  },
  Book: {
    editor: (book, args, ctx) => {
      console.log("🚀 ~ book:", book)
      console.log("Se solicito el recurso editor.");
      return {
        name: "Juan",
        email: "email@email.com",
      };
    },
  },
  Query: {
    books: () => books,
    async basic() {
      // await db.User.findAll()
      // await db.User.findOne()
      // await db.User.findByPk()

      return "Hello World!";
    },
  },
  Mutation: {
    // createBook: (_, args, ctx) => {
    //   // validar si el usuario tiene acceso al recurso a travez del contexto
    //   const newBook = { title: args.title, author: args.author };
    //   books.push(newBook);
    //   return newBook;
    // },

    createBook: (_, args, ctx) => {
      // validar si el usuario tiene acceso al recurso a travez del contexto
      // const newBook = { title: args.title, author: args.author };
      books.push(args.input);
      return args.input;
    },
  },
};

export default resolvers;
