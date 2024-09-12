import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i5.walmartimages.com'
            }
        ]
    }
};

export default nextConfig;
