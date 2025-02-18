import Hero from "@/src/components/hero/Hero"
import Instagram from "@/src/components/instagram/Instagram"
import MeaAbout from "@/src/components/mea_about/MeaAbout"
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice"
import OpenHours from "@/src/components/openingHours/OpenHours"
import Services, { Cards } from "@/src/components/services/Services"
import Testiamonials from "@/src/components/testimonials/Testiamonials"

import { GraphQLClient, gql } from "graphql-request"

async function fetchData() {
  const endpoint = process.env.BO_URL_GQL || "" // Replace with your GraphQL API
  const token = process.env.API_TOKEN
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const query = gql`
    query GetHomepage {
      homepage {
        hero {
          content {
            title
            description
            button {
              Title
              url
              isFill
            }
          }
          images {
            images_connection {
              nodes {
                formats
              }
            }
          }
        }
        about_highlight {
          content {
            caption
            title
            description
            button {
              Title
              url
              isFill
            }
            icon {
              icon {
                formats
              }
              counter
              description
            }
          }
        }
        service {
          content {
            caption
            description
            title
          }
          cards {
            card_content {
              title
              description
              button {
                Title
                url
              }
            }
            image {
              formats
            }
          }
        }
        service_list {
          image {
            images {
              formats
            }
          }
          content {
            title
            description
            caption
          }
          item_list {
            title
            price
            description
          }
        }
        testimonies {
          content {
            title
            caption
            description
          }
          testimonies_item {
            description
            note
            image {
              formats
            }
            author_info {
              name
              occupation
              author_photo {
                formats
              }
            }
          }
        }
        opening_hours {
          content {
            title
            caption
            button {
              Title
              isFill
              url
            }
          }
          items {
            hours
            days
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export default async function Home() {
  const { homepage }: any = await fetchData()
  return (
    <main>
      <Hero data={homepage.hero} />
      <MeaAbout data={homepage.about_highlight} />
      <Services>
        <Cards />
      </Services>
      <MeaTreatementPrice
        type={"priceList"}
        caption={"Treatments & Prices"}
        title={"It’s Time to Get Trimmed."}
      />
      <Testiamonials />
      <OpenHours />
      <Instagram />
    </main>
  )
}
