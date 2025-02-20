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
                protocol: 'https',
                hostname: 'www.inside360.ru',
            },
        ],
    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }

}

module.exports = nextConfig
