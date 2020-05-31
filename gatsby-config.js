/** @format */

module.exports = {
  siteMetadata: {
    title: `Starter Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `@Ebliq`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
    keywords: ['starter'],
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
