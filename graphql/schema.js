const { buildSchema } = require('graphql');

const schema = buildSchema(
    `
        type Todo {
            id: ID!
            text: String!
            completed: Boolean!
        }

        type Query {
            todos : [Todo]
        }

        type Mutation {
            addTodo( text: String! ): Todo
            completeTodo( id: ID! ): Todo
        }
    `
);
module.exports = schema