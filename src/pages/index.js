import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  Alert,
  UncontrolledAlert,
  Badge,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
  CardImgOverlay,
} from "reactstrap"
import Img from "gatsby-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [visible, setVisible] = useState(true)
  const onDismiss = () => setVisible(false)
  var myList = new Array()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div>
        <Alert color="primary">
          This is a primary alert with{" "}
          <a href="#" className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </Alert>
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
        <UncontrolledAlert color="info">
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
        <UncontrolledAlert color="info" fade={false}>
          I am an alert and I can be dismissed without animating!
        </UncontrolledAlert>
      </div>

      <Container>
        <Row xs="3">
          {/* <CardDeck> */}
          {posts.map(({ node }) => {
            const title = node.frontmatter.branch
            const titleName = node.frontmatter.categoryname
            const description = node.frontmatter.description
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid

            return (
              <article key={title}>
                <header>
                  {
                    <Col>
                      {/* <Button outline color="secondary"> */}
                      <Link style={{ boxShadow: `none` }} to={title}>
                        <Card inverse style={{textAlign:  "center"}}>
                          {/* <CardImg
                        top
                        width="100%"
                        src={featuredImgFluid}
                        alt="Card image cap"
                      /> */}
                          {/* <CardImg fluid={featuredImgFluid}/> */}
                          <Img fluid={featuredImgFluid} />
                          <CardImgOverlay style={{marginTop:"5%"}}>
                            {/* <CardBody> */}
                            <CardTitle style={{fontSize: 35}}>
                              {titleName}
                            </CardTitle>
                            <CardSubtitle>LastUpdate On 2020/08/28</CardSubtitle>
                            <CardText style={{marginTop:"15%"}}>
                              {description}
                            </CardText>
                            {/* <Button>Button</Button> */}
                            {/* </CardBody> */}
                          </CardImgOverlay>
                        </Card>
                      </Link>
                      {/* </Button> */}
                    </Col>
                  }
                </header>
              </article>
            )
          })}
          {/* </CardDeck> */}
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "medium_page" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            categoryname
            type
            branch
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
