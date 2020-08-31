//主分頁
//1.關於作者
//2.關於運動
//3.關於音樂
//4.關於技術
//5.關於攝影
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const MainPageTemplate = ({ data, pageContext, location }) => {
  //   const post = data.markdownRemark
  const posts = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const instagramPosts = data.allInstaNode.edges
  let fundamentalShow
  let showPhoto

  fundamentalShow = (
    <div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  // width: rhythm(70),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <div>{showPhoto}</div>
          </article>
        )
      })}
    </div>
  )

  showPhoto = (
    <Container style={{ padding: "auto 0", maxWidth: "100%", margin: "1% 0" }}>
      <Row xs="3">
        {instagramPosts.map(({ node }) => {
          const featuredImgFluid = node.localFile.childImageSharp.fluid

          return (
            <header>
              <Col style={{ padding: "0 0" }}>
                {<Img fluid={featuredImgFluid} style={{ height: 300 }} />}
              </Col>
            </header>
          )
        })}
      </Row>
    </Container>
  )

  if (
    location.pathname === "/aboutphoto" ||
    location.pathname === "/aboutphoto/"
  ) {
    return (
      <Layout location={location} title={siteTitle}>
        <div>
          {fundamentalShow}
          {showPhoto}
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <div>{fundamentalShow}</div>
      </Layout>
    )
  }
}

export default MainPageTemplate

export const pageQuery = graphql`
  query mainPageByCategory($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allInstaNode(sort: { fields: timestamp, order: DESC }) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $category }, type: { eq: "basic_page" } }
      }
    ) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            category
            date
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
