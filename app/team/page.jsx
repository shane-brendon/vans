import React from "react"
import Banner from "@/src/components/banner/Banner"
import TeamGalery from "@/src/components/team/Team"
import Instagram from "@/src/components/instagram/Instagram"
import OpenHours from "@/src/components/openingHours/OpenHours"
import { gql, GraphQLClient } from "graphql-request"

async function fetchData() {
  const endpoint = process.env.BO_URL_GQL || "" // Replace with your GraphQL API
  const token = process.env.API_TOKEN
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const query = gql`
    query GetTeam {
      team {
        banner {
          background_image {
            formats
          }
          content {
            title
            description
          }
        }
        team {
          content {
            caption
            title
            description
          }
          images {
            images_connection {
              nodes {
                formats
              }
            }
          }
        }
        working_hours {
          content {
            title
            description
          }
          items {
            days
            hours
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}
async function page() {
  const { service } = await fetchData()

  return (
    <>
      <Banner />
      <TeamGalery />
      <OpenHours />
      <Instagram />
    </>
  )
}

export default page
