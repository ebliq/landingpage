/** @format */

module.exports = {
  siteMetadata: {
    title: `Ebliq Landingpage`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `Ebliq`,
    siteUrl: `https://d1ai9rv3pcocry.cloudfront.net`,
    keywords: ['SaaS'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
