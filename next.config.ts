import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
            },
        ],
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

if (process.env.OUTPUT === "standalone") {
    nextConfig.output = "standalone";
}

const withMDX = createMDX();

export default withMDX(nextConfig);
