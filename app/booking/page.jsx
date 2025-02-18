import React from "react"
import Banner from "@/src/components/banner/Banner"
import BookingPriceList from "@/src/components/bookingPriceList/BookingPriceLIst"
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
    query GetBooking {
      booking {
        banner {
          background_image {
            formats
          }
          content {
            title
            description
          }
        }
        item_list {
          content {
            caption
            description
            title
          }
          item_list {
            description
            price
            title
          }
        }
        booking_form {
          caption
          title
          description
          button {
            Title
            isFill
            url
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}
async function page() {
  const { booking } = await fetchData()

  return (
    <>
      <Banner />
      <BookingPriceList />
      <MeaTreatementPrice
        type={"booking"}
        caption={"Make Appointment"}
        title={"Get Our Service"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
      />
    </>
  )
}

export default page
