/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:'/paas-actaf',
    assetPrefix: '/paas-actaf',
    output: "export", // Habilita exportaciones estáticas
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
