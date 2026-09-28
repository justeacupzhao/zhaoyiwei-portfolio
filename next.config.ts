import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = process.env.GITHUB_ACTIONS && repo ? `/${repo}` : "";
const nextConfig: NextConfig = { output: "export", basePath, assetPrefix: basePath, images: { unoptimized: true }, typescript: { ignoreBuildErrors: true }, env: { NEXT_PUBLIC_BASE_PATH: basePath } };

export default nextConfig;
