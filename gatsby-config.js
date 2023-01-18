module.exports = {
  pathPrefix: "/gatsby-mapbox",
  siteMetadata: {
    title: `Radnet Gatsby Mapbox`,
    description: ``,
    author: `HR`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
