let contentfulConfig
const path = require('path')

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
  contentTypeFilter: (contentType) => ["job", "jobLocation", "typeformForms"].includes(contentType.sys.id)
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
  )
}


module.exports = {
  siteMetadata: {
    title: "ACC Careers",
    siteUrl: `https://www.acc.edu.au`,
    author: 'ACC',
    description: 'Career opportunities at the nation-wide Australian Christian College (ACC) network of schools',
    image: '/acc-careers-meta-image.jpg'
  },
  pathPrefix: "/careers",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.acc.edu.au`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.acc.edu.au/blog/rss.xml`,
        name: `ACCBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration']
          }
        }
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.acc.edu.au/podcast/rss.xml`,
        name: `ACCPodcast`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration']
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WMFPBV",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ACC Careers',
        short_name: 'ACC Careers',
        start_url: `/?utm_source=PWA`,
        background_color: '#2a333c',
        theme_color: '#2a333c',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `src/images/ACC-Shield.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ],
};
