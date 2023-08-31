export const  typeDefs = `#graphql 

type Todo{
    id: String!,
    title: String!,
    content: String!,

}
type Query{
   todos:[Todo],
   
    
}
type Mutation{
addTodo(id:String, title:String, content:String) : Todo,
deleteTodo(id:String): Todo,
}

`;