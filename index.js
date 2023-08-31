import {ApolloServer} from '@apollo/server';
import express  from 'express';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import { dbConnect } from './db_connect.js';
import {typeDefs} from './schema.js';
import{resolvers} from './resolvers.js';
import cors from 'cors';
import bodyParser from 'body-parser';


dbConnect();
const app = express();
const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        plugins:[
            ApolloServerPluginDrainHttpServer({httpServer:app})
        ]
    }
);

await server.start();
app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
)
app.listen(2000, ()=>{console.log('server is running ')})