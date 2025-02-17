import { GraphQLClient, gql } from "graphql-request"

export default async function fetchData(query) {
  const endpoint = process.env.BO_URL_GQL || "" // Replace with your GraphQL API
  const token = process.env.API_TOKEN

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const query = gql`
    ${query}
  `

  return await graphQLClient.request(query)
}
