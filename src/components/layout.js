import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Navbar from "./Navbar/Navbar"
import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip,
  Tooltip,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

const footerIcon = {
  margin: "5% auto",
  maxWidth: "50%",
}

const Layout = ({ location, title, children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      gatsbyjs: file(absolutePath: { regex: "/gatsbyjs.png/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphql: file(absolutePath: { regex: "/graphql.png/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netlify: file(absolutePath: { regex: "/netlify.png/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(absolutePath: { regex: "/react.png/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       class="text-center"
  //       style={{
  //         ...scale(0.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <>
      <Navbar pageInfo={pageInfo} />
      <div
        style={
          {
            // marginLeft: `auto`,
            // marginRight: `auto`,
            // maxWidth: "87.5%",
            // margin:"0 0"
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }
        }
      >
        {/* <header>{header}</header> */}
        <main>{children}</main>

        <hr></hr>
        <footer>
          <Container>
            <Row xs="1">
              <Col style={{ textAlign: "center", margin: "5% auto" }}>
                <h2>© {new Date().getFullYear()}, Built with</h2>
              </Col>
            </Row>
          </Container>
          <Container style={{ marginBottom: "5%" }}>
            <Row xs="4">
              <Col>
                <span id="UncontrolledTooltipExample1">
                  {" "}
                  <button
                    style={{
                      borderStyle: "none",
                      backgroundColor: "white",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <a href="https://www.gatsbyjs.com">
                      <Image
                        fluid={data.gatsbyjs.childImageSharp.fluid}
                        style={footerIcon}
                      />
                    </a>
                  </button>
                </span>
                <UncontrolledTooltip
                  placement="top"
                  target="UncontrolledTooltipExample1"
                  style={{ textAlign: "left", margin: "auto 4%" }}
                >
                  <Image
                    fluid={data.gatsbyjs.childImageSharp.fluid}
                    style={footerIcon}
                  />
                  Gatsby is a React-based open source framework for creating
                  websites and apps. Build anything you can imagine with over
                  2000 plugins and performance, scalability, and security
                  built-in by default.
                </UncontrolledTooltip>
              </Col>
              <Col>
                <span id="UncontrolledTooltipExample2">
                  {" "}
                  <button
                    style={{
                      borderStyle: "none",
                      backgroundColor: "white",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <a href="https://graphql.org">
                      <Image
                        fluid={data.graphql.childImageSharp.fluid}
                        style={footerIcon}
                      />
                    </a>
                  </button>
                </span>
                <UncontrolledTooltip
                  placement="top"
                  target="UncontrolledTooltipExample2"
                  style={{ textAlign: "left", margin: "auto 4%" }}
                >
                  <Image
                    fluid={data.graphql.childImageSharp.fluid}
                    style={footerIcon}
                  />
                  GraphQL is a query language for APIs and a runtime for
                  fulfilling those queries with your existing data. GraphQL
                  provides a complete and understandable description of the data
                  in your API, gives clients the power to ask for exactly what
                  they need and nothing more, makes it easier to evolve APIs
                  over time, and enables powerful developer tools.
                </UncontrolledTooltip>
              </Col>
              <Col>
                <span id="UncontrolledTooltipExample">
                  {" "}
                  <button
                    style={{
                      borderStyle: "none",
                      backgroundColor: "white",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <a href="https://www.netlify.com">
                      <Image
                        fluid={data.netlify.childImageSharp.fluid}
                        style={footerIcon}
                      />
                    </a>
                  </button>
                </span>
                <UncontrolledTooltip
                  placement="top"
                  target="UncontrolledTooltipExample"
                  style={{ textAlign: "left", margin: "auto 4%" }}
                >
                  <Image
                    fluid={data.netlify.childImageSharp.fluid}
                    style={footerIcon}
                  />
                  Netlify is a San Francisco-based cloud computing[6] company
                  that offers hosting and serverless backend services for web
                  applications and static websites.
                </UncontrolledTooltip>
              </Col>
              <Col>
                <span id="UncontrolledTooltipExample44">
                  {" "}
                  <button
                    style={{
                      borderStyle: "none",
                      backgroundColor: "white",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <a href="https://reactjs.org">
                      <Image
                        fluid={data.react.childImageSharp.fluid}
                        style={footerIcon}
                      />
                    </a>
                  </button>
                </span>
                <UncontrolledTooltip
                  placement="top"
                  target="UncontrolledTooltipExample44"
                  style={{ textAlign: "left", margin: "auto 4%" }}
                >
                  <Image
                    fluid={data.react.childImageSharp.fluid}
                    style={footerIcon}
                  />
                  React (also known as React.js or ReactJS) is an open-source
                  JavaScript library[3] for building user interfaces or UI
                  components. It is maintained by Facebook and a community of
                  individual developers and companies.
                </UncontrolledTooltip>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default Layout
