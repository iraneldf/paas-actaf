/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';


const nextConfig = {
    basePath: isGitHubPages ? '/paas-actaf': '',
    assetPrefix: isGitHubPages ? '/paas-actaf/' : '',
    trailingSlash: true,
    output: "export", // Habilita exportaciones estáticas
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
