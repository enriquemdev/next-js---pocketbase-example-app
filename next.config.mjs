import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i5.walmartimages.com'
            },
            {
                hostname: 'pocketbase_8080-tw8cs88ww8kockc04c0socko.67.205.156.222.sslip.io'
            }
        ]
    }
};

export default nextConfig;
