
export default function absoluteUrl(url) {
  const absUrl = `${process.env.BO_URL}${url}`
  return absUrl
}