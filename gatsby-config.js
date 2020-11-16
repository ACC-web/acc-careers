let contentfulConfig
const path = require('path')

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
      process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
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
  },
  pathPrefix: "/careers",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "EmUfJocNZvIGaT9aJM52ZEY6O",
          consumer_secret: "r1gd0TsWlW57afx8J7vv6Zm8Z1hUQgNMxVjzDRsTiMolQq3Ell",
          bearer_token: "AAAAAAAAAAAAAAAAAAAAAE5AHwEAAAAAaZD4%2BM%2B5wo%2BSGTUMsIRdBbtT%2B7U%3DLMjtfZPVfgF6fpMY7vHWWwoifz0dGlC48SdwVfHlbNoCfjXv4x",
        },
        queries: {
          getPosts: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "ACCGroup2",
              include_rts: false,
              exclude_replies: false,
              tweet_mode: "extended",
            },
          },
        },
      },
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
      resolve: 'gatsby-source-vimeo-all',
      options: {
        clientId: '9aec5b2b8284aecd506c534e1fa959f2d33e39c0',
        clientSecret: 'ZYUemUrhBOuVnL5zo4DnsMJokjqh+cVATkUgUIzjpjoj7LxIxqY3bWSL2oGY4xwCDHU97AfoUftJwI+qLVrrfYFRdVr4uPUar4aVpK5gO8uBmlwvg6og9ke+702UuLlr',
        accessToken: '9b737e34e27ea827c368f6cfb51ee3c1',
      },
      categories: [
          {
            "link": "https://vimeo.com/365660254",
        }
      ]
    }
  ],
};
