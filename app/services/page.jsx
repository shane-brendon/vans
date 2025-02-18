import React from "react"
import Banner from "@/src/components/banner/Banner"
import Services, { Cards } from "@/src/components/services/Services"
import Testiamonials from "@/src/components/testimonials/Testiamonials"
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice"
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
    query GetService {
      service {
        banner {
          background_image {
            formats
          }
          content {
            title
            description
          }
        }
        services {
          content {
            caption
            title
            description
          }
          cards {
            card_content {
              title
              description
              button {
                Title
                isFill
                url
              }
            }
            image {
              formats
            }
          }
        }
        testimonies {
          content {
            caption
            title
            description
          }
          testimonies_item {
            image {
              formats
            }
            description
            author_info {
              name
              occupation
              author_photo {
                formats
              }
            }
          }
        }
        item_list {
          content {
            caption
            title
            description
          }
          image {
            images {
              formats
            }
          }
          item_list {
            title
            price
            description
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
      <Services>
        <Cards />
      </Services>
      <Testiamonials />
      <MeaTreatementPrice
        type={"priceList"}
        title={"It’s Time to Get Trimmed."}
        caption={"Treatments & Prices"}
      />
    </>
  )
}

export default page
