/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }, {
        source: '/old-page/:id',
        destination: '/new-page/:id',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
