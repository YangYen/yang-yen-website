/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Jumbotron, Button, Container, Row, Col } from "reactstrap"
import Particles from "react-tsparticles"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 0;
  transition: all 200ms ease-in;
  position: relative;
  box-shadow: none;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      igicon: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubicon: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedinicon: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtubeicon: file(absolutePath: { regex: "/youtube-icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            github
            linkedin
            youtube
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `block`,
        // marginBottom: rhythm(2.5),
        margin: "2% 0",
        // display:"inline",
        // textAlign: "center",
      }}
    >
      <div>
        <Jumbotron fluid style={{ color: "#FFFFFF" }}>
          <Container fluid style={{ display: "inline", color: "grey" }}>
            <Row xs="2">
              <Col style={{ maxWidth: "30%" }}>
                <Image
                  fluid={data.avatar.childImageSharp.fluid}
                  alt={author.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "25%",
                    marginRight: "25%",

                    // borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `5%`,
                    marginBottom: 0,
                  }}
                />
              </Col>
              <Col style={{ minWidth: "70%", paddingRight: "7.5%" }}>
                <h2>{author.name}</h2>
                <p>{author.summary}</p>
                <hr className="my-2" />
                <Row xs="4">
                  <Col style={{ maxWidth: "10%" }}>
                    <a href={`${social.instagram}`}>
                      <Image
                        fluid={data.igicon.childImageSharp.fluid}
                        alt={author.name}
                        style={{
                          // marginRight: rhythm(1 / 2),
                          // marginLeft: rhythm(1 / 2),

                          // marginTop: rhythm(1.5),
                          // minWidth: 50,
                          // margin:"0 30%" ,
                          borderRadius: `100%`,
                        }}
                        imgStyle={{
                          borderRadius: `50%`,
                          marginBottom: 0,
                        }}
                      />
                    </a>
                  </Col>

                  <Col style={{ maxWidth: "10%" }}>
                    <a href={`${social.github}`}>
                      <Image
                        fluid={data.githubicon.childImageSharp.fluid}
                        alt={author.name}
                        style={{
                          // marginRight: rhythm(1 / 2),
                          // marginLeft: rhythm(1 / 2),

                          // marginTop: rhythm(1.5),
                          // minWidth: 50,
                          // margin:"0 30%" ,
                          borderRadius: `100%`,
                        }}
                        imgStyle={{
                          borderRadius: `50%`,
                          marginBottom: 0,
                        }}
                      />
                    </a>
                  </Col>
                  <Col style={{ maxWidth: "10%" }}>
                    <a href={`${social.linkedin}`}>
                      <Image
                        fluid={data.linkedinicon.childImageSharp.fluid}
                        alt={author.name}
                        style={{
                          // marginRight: rhythm(1 / 2),
                          // marginLeft: rhythm(1 / 2),

                          // marginTop: rhythm(1.5),
                          // minWidth: 50,
                          // margin:"0 30%" ,
                          borderRadius: `100%`,
                        }}
                        imgStyle={{
                          borderRadius: `50%`,
                          marginBottom: 0,
                        }}
                      />
                    </a>
                  </Col>
                  <Col style={{ maxWidth: "10%" }}>
                    <a href={`${social.youtube}`}>
                      <Image
                        fluid={data.youtubeicon.childImageSharp.fluid}
                        alt={author.name}
                        style={{
                          // marginRight: rhythm(1 / 2),
                          // marginLeft: rhythm(1 / 2),

                          // marginTop: rhythm(1.5),
                          // minWidth: 50,
                          // margin:"0 30%" ,
                          borderRadius: `100%`,
                        }}
                        imgStyle={{
                          borderRadius: `50%`,
                          marginBottom: 0,
                        }}
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </div>
  )
}

export default Bio
