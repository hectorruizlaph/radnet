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
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
        }}
      >
        {nodes.map(node => {
          const title = node.frontmatter.title
          return (
            <Link to={node.fields.slug} className={styles.listItems}>
              <li key={title} className={styles.listItemsText}>
                {title}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList
