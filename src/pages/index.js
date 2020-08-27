import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Button, Alert, UncontrolledAlert, Badge } from 'reactstrap';


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  var myList = new Array()
  // const mainPages = data.allMarkdownRemark.edges

  return (
    
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
   
      
      {/* {posts.map(({ node }) => {
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
          </article>
        )
      })} */}
          <div>
      <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
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
      
      {posts.map(({ node }) => {
        const title = node.frontmatter.category 
        const titleName = node.frontmatter.categoryname 
        
        if(myList.includes(title)){
          // break
        }else{
          myList.push(title)
          return (
            <article key={title}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    // width: rhythm(70),
                  }}
                >
                  <Badge color="warning">
                  <Link style={{ boxShadow: `none` }} to={title}>
                    {titleName}
                  </Link>
                  </Badge>
                  <Button color="danger">Danger!</Button>
                </h3>
                {/* <small>{date}</small> */}
              </header>
              {/* <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description ,
                  }}
                />
              </section> */}
            </article>
          )
        }
      })}
    </Layout>
    
    
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) 
      {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            categoryname
          }
        }
      }
    }
  }
`
