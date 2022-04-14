import { GraphQLScalarType, Kind } from 'graphql';
import { oddTest, evenTest } from '../functions/extraFunctions.js';

//resolverlar

export const resolvers = {

    //toq
    Odd: new GraphQLScalarType({
        name: "Odd",
        description: "Toq sonni aniqlovchi qo' bola scalar type",
        parseValue: oddTest,
        serialize: oddTest,
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return oddTest(parseInt(ast.value));
            }
            throw new Error("Kiritilgan raqam toq emas");
        },
    }),
    //juft
    Even: new GraphQLScalarType({
        name: "Even",
        description: "Juft sonni aniqlovchi qo' bola scalar type",
        parseValue: evenTest,
        serialize: evenTest,
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return evenTest(parseInt(ast.value));
            }
            throw new Error("Kiritilgan raqam juft emas");
        },
    }),


    Query: {
        //toq
        isOdd(_, { odd }) {
            return odd;
        },
        //juft
        isEven(_, { even }) {
            return even
        }
    }
};