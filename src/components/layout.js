import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"

const Layout = ({ location, title, children, pageInfo }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        class="text-center"
        style={{
          ...scale(0.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <>
      <Navbar pageInfo={pageInfo} />
      <div>
        <main>{children}</main>

        <hr></hr>
        <footer>
          <Bio />
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
