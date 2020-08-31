import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
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
  Progress,
} from "reactstrap"
import Img from "gatsby-image"
import styled from "styled-components"

const CustomProgress = {
  margin:"0.7% 0"
};


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [visible, setVisible] = useState(true)
  const onDismiss = () => setVisible(false)
  const totalArticle = data.totalPageCount.totalCount

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <hr></hr>
      <div>
        <h5 style={{ textAlign: "center" }}>文章統計</h5>

        {/* TODO 動態生成數量統計 */}
        <div>
          <Progress
            bar
            animated
            color="primary"
            value={data.blogPageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            部落格
          </Progress>
          <Progress
            bar
            animated
            color="dark"
            value={data.mePageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            關於作者
          </Progress>
          <Progress
            bar
            animated
            color="success"
            value={data.musicPageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            音樂
          </Progress>
          <Progress
            bar
            animated
            color="info"
            value={data.photoPageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            攝影
          </Progress>
          <Progress
            bar
            animated
            color="warning"
            value={data.sportPageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            運動
          </Progress>
          <Progress 
            bar
            animated
            color="danger"
            value={data.techPageCount.totalCount}
            max={totalArticle / 4}
            style={CustomProgress}
          >
            科技
          </Progress>

        </div>
        <hr></hr>
      </div>

      <Container style={{padding:"auto 0", maxWidth:"100%", margin:"auto 0"}}>
        <Row xs="3"  >
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
                    <Col style={{padding:"0 0"}}>
                      {/* <Button outline color="secondary"> */}
                      <Link style={{ boxShadow: `none` }} to={title}>
                        <Card inverse style={{ textAlign: "center" }}>
                          {/* <CardImg
                        top
                        width="100%"
                        src={featuredImgFluid}
                        alt="Card image cap"
                      /> */}
                          {/* <CardImg fluid={featuredImgFluid}/> */}
                          <Img fluid={featuredImgFluid} />
                          <CardImgOverlay style={{ marginTop: "5%" }}>
                            {/* <CardBody> */}
                            <CardTitle style={{ fontSize: 35 }}>
                              {titleName}
                            </CardTitle>
                            <CardSubtitle>
                              LastUpdate On 2020/08/28
                            </CardSubtitle>
                            <CardText style={{ marginTop: "15%" }}>
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

    blogPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "basic_page" }, branch: { eq: "aboutblog" } }
      }
    ) {
      totalCount
    }
    mePageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "basic_page" }, branch: { eq: "aboutme" } }
      }
    ) {
      totalCount
    }
    musicPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: { eq: "basic_page" }
          branch: { eq: "aboutmusic" }
        }
      }
    ) {
      totalCount
    }
    photoPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: { eq: "basic_page" }
          branch: { eq: "aboutphoto" }
        }
      }
    ) {
      totalCount
    }
    sportPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: { eq: "basic_page" }
          branch: { eq: "aboutsport" }
        }
      }
    ) {
      totalCount
    }
    techPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "basic_page" }, branch: { eq: "abouttech" } }
      }
    ) {
      totalCount
    }
    totalPageCount: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "basic_page" } } }
    ) {
      totalCount
    }
  }
`
