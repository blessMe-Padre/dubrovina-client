/** @type {import('next').NextConfig} */
const path = require('path');

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

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }

}

module.exports = nextConfig
