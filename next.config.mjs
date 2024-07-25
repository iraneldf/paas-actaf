/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? '/paas-actaf/': '',
    assetPrefix: isProd ? '/paas-actaf/' : '',
    output: "export", // Habilita exportaciones estáticas
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
