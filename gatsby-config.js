module.exports = {
  siteMetadata: {
    title: 'IBM SWAT for Multi-Cloud-Manager (MCM) Home',
    description:
      'Collection of content created and maintained by the IBM SWAT for Multi-Cloud-Manager (MCM) Team',
    keywords: 'IBM,CTE,gatsby,theme,carbon',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM SWAT for MCM',
        short_name: 'IBM SWAT for MCM',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/IBMIntegration/learn-cloudpakintegration-site',
          isSearchEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ]
      },
    },  
  ],
}
