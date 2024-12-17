/** @type {import('next').NextConfig} */
import withImages from 'next-images'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'], // Add any domains you'll be loading images from
  },
}

export default withImages(nextConfig)

