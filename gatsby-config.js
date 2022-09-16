module.exports = {
  pathPrefix: "/gatsby-mapbox", // this is for demo site. remove for your project
  siteMetadata: {
    title: `Gatsby Mapbox`,
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
