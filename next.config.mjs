// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { 
//         hostname: "images.unsplash.com" 
//       },
//       {
//         hostname : "lh3.googleusercontent.com"
//       },
//       {
//         hostname : 't4.ftcdn.net'
//       },
//       {
//         hostname : 'res.cloudinary.com'
//       },
//       {
//         hostname : 'i.pinimg.com'
//       }
//     ],
    
//   },
// };

// export default nextConfig;





// next.config.mjs

export default {
  images: {
    remotePatterns: [
      { 
        hostname: "images.unsplash.com" 
      },
      {
        hostname : "lh3.googleusercontent.com"
      },
      {
        hostname : 't4.ftcdn.net'
      },
      {
        hostname : 'res.cloudinary.com'
      },
      {
        hostname : 'i.pinimg.com'
      }
    ],
  },

  // Adding custom headers, including CORS headers
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply to all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // You can replace "*" with specific domains
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};
