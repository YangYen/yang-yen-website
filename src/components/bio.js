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
      fbicon: file(absolutePath: { regex: "/facebook-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      igicon: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubicon: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinicon: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
            facebook
            instagram
            github
            linkedin
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
      }}
    >
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
      <div
          //  style={{
          //   marginBottom: rhythm(0.05),
          // }}
          >
      <p>
        {/* Written by */}
         <strong>{author.name}</strong>
         
         
        
        {/* <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a> */}
      </p>
      <p>
      {author.summary}
      </p>
      </div>

      <NavItem to={`${social.facebook}`}>      <Image
        fixed={data.fbicon.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginLeft: rhythm(1 / 2),
          marginBottom: 0,
          marginTop:rhythm(1.5),
          // minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /></NavItem>

        <NavItem to={`${social.instagram}`}>      
        <Image
        fixed={data.igicon.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginLeft: rhythm(1 / 2),
          marginBottom: 0,
          marginTop:rhythm(1.5),
          // minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /></NavItem>

        <NavItem to={`${social.github}`}>      
        <Image
        fixed={data.githubicon.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginLeft: rhythm(1 / 2),
          marginBottom: 0,
          marginTop:rhythm(1.5),
          // minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /></NavItem>

        <NavItem to={`${social.linkedin}`}>      
        <Image
        fixed={data.linkedinicon.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginLeft: rhythm(1 / 2),
          marginBottom: 0,
          marginTop:rhythm(1.5),
          // minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /></NavItem>
    </div>
  )
}

export default Bio
