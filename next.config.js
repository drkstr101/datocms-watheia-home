require('dotenv').config()

const nextConfig = {
  future: {
    webpack5: true,
  },
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
}

const withImages = require('next-images')
module.exports = withImages(nextConfig)
