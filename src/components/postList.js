import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/styles.module.css"

const query = graphql`
  query {
    allPlaces {
      nodes {
        alias
        name
        city
        id
        postal
      }
    }
  }
`

// query MyQuery {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//       }
//       fields {
//         slug
//       }
//     }
//   }
// }

const PostList = () => {
  const data = useStaticQuery(query)
  const nodes = data.allPlaces.nodes

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
            const name = node.name
            return (
              <Link
                to={`/${node.alias}`}
                className={styles.listItems}
                activeClassName={styles.active}
              >
                <li key={node.id} className={styles.listItemsText}>
                  <h3>{name}</h3>
                  <p>
                    {node.postal} - {node.city}
                  </p>
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
