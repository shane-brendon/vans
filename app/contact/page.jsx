import React from "react"
import Banner from "@/src/components/banner/Banner"
import ContactCards from "@/src/components/contactCarts/ContactCards"
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
    query GetContact {
      contact {
        banner {
          background_image {
            formats
          }
          content {
            title
            description
          }
        }
        contact_info {
          cards {
            card_content {
              title
              description
            }
          }
        }
        contact_form {
          caption
          title
          description
          button {
            url
            isFill
            Title
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}
async function page() {
  const { contact } = await fetchData()
  
  return (
    <>
      <Banner />
      <ContactCards />
      <MeaTreatementPrice
        type={"contact"}
        caption={"Contact"}
        title={"Get in touch"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </>
  )
}

export default page
