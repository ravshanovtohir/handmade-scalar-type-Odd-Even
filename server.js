import { ApolloServer, gql, UserInputError } from 'apollo-server';

import {
    ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core"

//schema import
import { typeDefs } from "./moduls/schema.js"
//resolver import
import { resolvers } from "./moduls/resolver.js";

//built server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

//server is running
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});