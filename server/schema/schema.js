
//for schema
const graphql=require('graphql');

//for book type and book fields
const {GraphQLObjectType,GraphQLString}=graphql;

//create a book type
const bookType=new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        type:{type:GraphQLString}
    })
});

