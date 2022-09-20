import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/styles.module.css"

const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

const PostList = () => {
  const data = useStaticQuery(query)
  const nodes = data.allMarkdownRemark.nodes

  return (
    <div className={styles.listContainer}>
      <Link to="/">
      <div className={styles.allLocations}>
        <img src="/logo.png" alt="radnet logo" />
        <p>See All Locations</p>
      </div>
      </Link>
      <div>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          {nodes.map(node => {
            const title = node.frontmatter.title
            return (
              <Link
                to={node.fields.slug}
                className={styles.listItems}
                activeClassName={styles.active}
              >
                <li key={title} className={styles.listItemsText}>
                  {title}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PostList
