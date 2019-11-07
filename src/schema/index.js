const graphql = require('graphql');

const { GraphQLSchema } = graphql;

// Root query
const query = require('./root_query');

module.exports = new GraphQLSchema({
  query
});
