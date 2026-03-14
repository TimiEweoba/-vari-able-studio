/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure we can import from outside 'app' if needed (e.g. shared)
    experimental: {
        // serverActions: true, // Enable if we use server actions later
    },
    typescript: {
        // Next.js will use its own tsconfig, 
        // we might need to adjust if there are many errors during migration
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' }
        ],
    },
};

export default nextConfig;
