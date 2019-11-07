const graphql = require('graphql');
const axios = require('axios');

const { GraphQLObjectType, GraphQLList } = graphql;

/** Model Types */
const player = require('./types/player');
const team = require('./types/team');

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    players: {
      type: new GraphQLList(player),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3004/players`)
          .then(response => response.data);
      }
    },
    teams: {
      type: new GraphQLList(team),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3004/teams`)
          .then(response => response.data);
      }
    }
  })
});

module.exports = rootQuery;
