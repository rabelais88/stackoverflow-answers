/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcTraceProfiling: true,
    swcPlugins: [
      [
        'transform-imports',
        {
          '@mui/material': {
            transform: '@mui/material/{{member}}'
          }
        }
      ]
      // [
      //   'swc-plugin-transform-import',
      //   {
      //     "@mui/material": {
      //       transform: "@mui/material/{{member}}",
      //     },
      //     "@mui/icons-material": {
      //       transform: "@mui/icons-material/{{member}}",
      //     },
      //     "@mui/styles": {
      //       transform: "@mui/styles/{{member}}",
      //     },
      //     "@mui/lab": {
      //       transform: "@mui/lab/{{member}}",
      //     }
      //   }
      // ]
    ]
  }
}

module.exports = nextConfig
