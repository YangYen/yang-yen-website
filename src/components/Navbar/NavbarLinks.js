// NavbarLinks.js

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

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

const NavbarLinks = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
        edges {
            node {
            fields {
                slug
            }
            frontmatter {
                title
            }
            }
        }
        }
    }
    `)
    const posts = data.allMarkdownRemark.edges
  return (
    <>
    {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
                <NavItem to={node.fields.slug}>{title}</NavItem>
        )
      })}
      {/* <NavItem to="/">About</NavItem>
      <NavItem to="/404">Services</NavItem>
      <NavItem to="/">Gallery</NavItem>
      <NavItem to="/404">Contact</NavItem> */}
    </>
  )
}

export default NavbarLinks
