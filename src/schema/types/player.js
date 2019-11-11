/**
 * Player type
 */
const graphql = require('graphql');
const axios = require('axios');
/** Import object types from GraphQL */
const { GraphQLObjectType, GraphQLString } = graphql;

const Player = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    team: {
      type: require('./team'),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3004/teams/${parentValue.teamId}`)
          .then(response => response.data);
      }
    }
  })
});

module.exports = Player;
