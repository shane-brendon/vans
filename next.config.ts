const path = require("path")

const allowedDomains = process.env.NEXT_IMAGE_DOMAIN?.split(",") || []
const isHttps =
  process.env.BO_URL &&
  process.env.BO_URL.startsWith("https")
const remotePatterns = allowedDomains.map((domain) => ({
  protocol: isHttps ? "https" : "http", // Use the protocol of the BASE_URL
  hostname: domain.trim(),
  pathname: "/sites/**",
}))

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: remotePatterns,
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  transpilePackages: ["mui-tel-input"],
}

// Debugging to ensure environment variables are loaded correctly
console.log("NEXT_IMAGE_DOMAIN:", process.env.NEXT_IMAGE_DOMAIN)

module.exports = nextConfig

// Disable SSL/TLS certificate validation for local development (only use in local)
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}
