/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dqeqxhroe",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1Ijoic25vd3dvcmtzZGV2IiwiYSI6ImNscGIyZDFycjBjbmwyaXF0NWNoczB1ejAifQ.YA31bHps6e5d2QGrjGpFcg",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
