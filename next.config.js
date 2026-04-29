/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dubrovinastom.ru',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1338',
            },
        ],
    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }

}

module.exports = nextConfig
