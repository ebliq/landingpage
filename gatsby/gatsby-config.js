/** @format */

module.exports = {
  siteMetadata: {
    title: `Ebliq`,
    description: `Entdecke Erkenntnisse zu wirtschaftlich relevanten Themen. Die Inhalte werden dabei in Echtzeit bereitgestellt. ebliq analysiert für dich öffentlich zugängliche deutsche Nachrichtenquellen.`,
    author: `Ebliq`,
    siteUrl: `https://ebliq.de`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ebliq Landingpage`,
        short_name: `ebliq`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/logo.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ebliq.de',
        sitemap: 'https://ebliq.de/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}],
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
