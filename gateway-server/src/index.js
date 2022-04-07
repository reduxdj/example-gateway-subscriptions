import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginUsageReporting,
  ApolloServerPluginUsageReportingDisabled,
} from "apollo-server-core";

const gateway = new ApolloGateway({
  // eslint-disable,
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "authors", url: process.env.AUTHORS_SERVICE_URL },
      { name: "posts", url: process.env.POSTS_SERVICE_URL },
    ],
  }),
});
const server = new ApolloServer({
  gateway,
  plugins: [ApolloServerPluginUsageReportingDisabled()],
});

server.listen(process.env.GATEWAY_PORT).then(({ url }) => {
  console.log(`🚀 Gateway API running at ${url}`);
});
