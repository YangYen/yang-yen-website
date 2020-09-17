const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const mainPages = path.resolve(`./src/templates/main-pages.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { type: { eq: "basic_page" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
                branch
              }
            }
          }
        }
        mainPages: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { type: { eq: "medium_page" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                branch
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  const postsForMainPages = result.data.mainPages.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  postsForMainPages.forEach(post => {
    createPage({
      path: post.node.frontmatter.branch,
      component: mainPages,
      context: {
        category: post.node.frontmatter.branch,
        // slug: post.node.frontmatter.branch,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
