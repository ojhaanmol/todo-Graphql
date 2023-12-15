const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const rootValue = require('./graphql/resolver');

const app = express();

app.use('/graphql',
    graphqlHTTP(
        {
            schema,
            rootValue,
            graphiql:true
        }
    )
);

app.get('/',(request,response)=>{
    response.json({
        paths : [
            'http://localhost:3000/graphql'
        ]
    })
})

module.exports = app;