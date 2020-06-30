const path = require('path');
const config = require('./src/utils/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:300,400,700`, `paytone one\:300,400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.name,
        short_name: `starter`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/logos/avatar.png`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: `markdown-pages`,
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.themeColor },
            },
          },
        ],
      },
    },
  ],
};
