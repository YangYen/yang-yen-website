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
          fixed(pngQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      igicon: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, pngQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubicon: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, pngQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinicon: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, pngQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      youtubeicon: file(absolutePath: { regex: "/youtube-icon.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, pngQuality: 100) {
            ...GatsbyImageSharpFixed
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
        marginBottom: 0,
        // display:"inline",
        // textAlign: "center",
      }}
    >
      <div>
        <Jumbotron fluid style={{ color: "#FFFFFF" }}>
          <Container fluid style={{ display:"inline", color:"grey" }}>
          <Row xs="2">
          <Col style={{ maxWidth:"30%",margin:"auto auto" }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 300,
                minHeight: 150,
                // borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `10%`,
              }}
            />
          </Col>
          <Col style={{ maxWidth: "70%",textAlign: "center",margin:"auto auto" }}>
            <h1>{author.name}</h1>
            <p className="lead">
            {author.summary}
            </p>
            <hr className="my-2" />
            <p className="lead">
            <NavItem to={`${social.instagram}`}>
        <Image
          fixed={data.igicon.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginLeft: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: rhythm(1.5),
            // minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </NavItem>

      <NavItem to={`${social.github}`}>
        <Image
          fixed={data.githubicon.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginLeft: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: rhythm(1.5),
            // minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </NavItem>

      <NavItem to={`${social.linkedin}`}>
        <Image
          fixed={data.linkedinicon.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginLeft: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: rhythm(1.5),
            // minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </NavItem>

      <NavItem to={`${social.youtube}`}>
        <Image
          fixed={data.youtubeicon.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginLeft: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: rhythm(1.5),
            // minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </NavItem>
            </p>
            </Col>
            
            </Row>
          </Container>
        </Jumbotron>
      </div>

      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default Bio
