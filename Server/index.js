// const express = require('express');
// require('dotenv').config();
// const {graphqlHTTP} = require('express-graphql');
// const schema = require('./schema/schema');
// const port = process.env.PORT || 4000;

// const app = express();

//allowing cross-origin requests
//app.use(cors());

//connect to mlab database
//make sure to replace my db string & creds with our own
//mongoose.connect('db string');

//mongoose.connectoin.once('open',()=>){
  //  console.log('connected to database');
//});

// app.use('graphql', graphqlHTTP({
//    schema, 
//    graphiql: process.env.NODE_ENV === 'development', 
// }))
//app.use('/graphql',graphqlHTTP({
    //schema,
    //graphiql:true
//}));
// app.listen(port, console.log('server listening on port ${port'));

var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
    message: () => 'Add $25 for the month of Novemember.'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));