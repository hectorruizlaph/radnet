const path = require("path")
const fetch = require('node-fetch');
const { createFilePath } = require(`gatsby-source-filesystem`)

const NODE_TYPE = 'Places';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/postTemplate.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch('https://stage.radnet.com/locator/search/json');
  const json = await response.json();
  const matched = json.matched;

  const matchedPlaces = matched.map(places => { 
    return places
  });
  matchedPlaces.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${index}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      }
    })
  })
}

// issue when deploying Mapbos GL JS
// https://github.com/mapbox/mapbox-gl-js/issues/4359

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     module: {
//       noParse: /(mapbox-gl)\.js$/,
//     },
//   })
// }
