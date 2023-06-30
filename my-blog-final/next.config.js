/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/Luismartinez375/blog-posts/main/images/**'
            }
        ]
    } 
}

module.exports = nextConfig
