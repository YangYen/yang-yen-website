// NavbarLinks.js

import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  UncontrolledButtonDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "reactstrap"

var myList = new Array()
var url = String()
var urlSet = new Set()

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
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
    text-decoration: none;
    opacity: 1;
    ::after {
      width: 80%;
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
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "medium_page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              branch
              type
              categoryname
            }
          }
        }
      }

      data2: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "basic_page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              branch
              type
              title
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)

  const posts2 = data.data2.edges

  return (
    <>
      {posts.map(({ node }) => {
        const branch = node.frontmatter.branch
        const categoryname = node.frontmatter.categoryname
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <UncontrolledButtonDropdown>
                  <DropdownToggle style={{ opacity: 0.75 }} caret color="info">
                    <NavItem to={"/"+branch}>{categoryname}</NavItem>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <Spinner size="sm" color="primary" /> 文章列表
                    </DropdownItem>
                    <DropdownItem divider />
                    {posts2.map(({ node }) => {
                      const branch2 = node.frontmatter.branch
                      if (branch == branch2) {
                        return (
                          <NavItem>
                            <DropdownItem
                              style={{ boxShadow: `none` }}
                              href={node.fields.slug}
                            >
                              {node.frontmatter.title}
                            </DropdownItem>
                          </NavItem>
                        )
                      }
                    })}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </h3>
            </header>
          </article>
        )
      })}
    </>
  )
}

export default NavbarLinks
