/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  transpilePackages: [
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "gsap/all",
    "gsap",
  ],
};

module.exports = nextConfig;
