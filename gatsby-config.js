module.exports = {
  siteMetadata: {
    title: "CancaoNova Chorus Next 1.0 PromotionSite",
    author: "Yudai Homma",
    description: "CancaoNova Chorus Next 1.0 PromotionSite"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/nova.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
