/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '89.108.115.136',
                port: '1338',
            },
        ],
    },
}

module.exports = nextConfig
