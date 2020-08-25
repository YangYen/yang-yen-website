// NavbarLinks.js

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
                  category
              }
            }
        }
        }
    }
    `)
    const posts = data.allMarkdownRemark.edges

    // {posts.map(({ node }) => {
      
    //   const title = node.frontmatter.title || node.fields.slug
    //   const title2 = node.frontmatter.category 
    
    //   if(urlSet.has(title2)){
    //     // break
    //     // urlSet.delete(title2)
        
    //     // console.log("error")
    //   }else{
    //     urlSet.add(title2)
    //     // console.log(title2) 
    //     // return(<NavItem to={"/"+title2}>{title2}</NavItem>)
        
    //     // url = title2
    //   }


      
    //   //  console.log(title2)  
    // })}
    // const iterator1 = urlSet.values()
    // let result = iterator1.next()
    // while(!result.done){
    //   console.log(result.value)
    //   result = iterator1.next()
    // }

    
  return (
    <>
  
      {/* TODO 動態生成NavBar連結 */}
      <NavItem to="/aboutme">關於作者</NavItem>
      <NavItem to="/aboutblog">部落格</NavItem>
      <NavItem to="/aboutmusic">音樂</NavItem>
      <NavItem to="/aboutphoto">攝影</NavItem>
      <NavItem to="/aboutsport">運動</NavItem>
      <NavItem to="/abouttech">科技</NavItem> 
    </>
  )
}

export default NavbarLinks
