import React from "react"
import Banner from "@/src/components/banner/Banner"
import MeaAbout from "@/src/components/mea_about/MeaAbout"
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice"
import { MeaTeam } from "@/src/components/team/Team"
import OpenHours from "@/src/components/openingHours/OpenHours"
import Instagram from "@/src/components/instagram/Instagram"
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
    query GetAbout {
      about {
        banner {
          background_image {
            formats
          }
          content {
            title
            description
          }
        }
        about_highlight {
          content {
            caption
            button {
              Title
              isFill
              url
            }
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
        why_chose_us {
          content {
            caption
            title
            description
            button {
              Title
              isFill
              url
            }
          }
          images {
            images {
              formats
            }
          }
        }
        team_mea {
          content {
            button {
              Title
              isFill
              url
            }
            caption
            title
            description
          }
          images {
            images {
              formats
            }
          }
        }
        working_hours {
          content {
            caption
            title
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
  const { about } = await fetchData()

  return (
    <>
      <Banner />
      <MeaAbout data={about.about_highlight} />
      <MeaTreatementPrice
        caption={"Why Choose Us"}
        title={"Take Your Nails To The Next Level"}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque."
        }
        button={true}
      />
      <MeaTeam />
      <OpenHours />
      <Instagram />
    </>
  )
}

export default page
