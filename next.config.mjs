/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" 

      },
      {
        hostname : "lh3.googleusercontent.com"
      },
      {
        hostname : 't4.ftcdn.net'
      },
      {
        hostname : 'res.cloudinary.com'
      }
    ],
    
  },
};

export default nextConfig;
