import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar"
import { rhythm, scale } from "../utils/typography"

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   let header

//   if (location.pathname === rootPath) {
//     header = (
//       <h1 class="text-center"
//         style={{
//           ...scale(0.5),
//           marginBottom: rhythm(1.5),
//           marginTop: 0,

//         }}
//       >
//         <Link
//           style={{
//             boxShadow: `none`,
//             color: `inherit`,
//           }}
//           to={`/`}
//         >
//           {title}
//         </Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <h3
//         style={{
//           fontFamily: `Montserrat, sans-serif`,
//           marginTop: 0,
//         }}
//       >
//         <Link
//           style={{
//             boxShadow: `none`,
//             color: `inherit`,
//           }}
//           to={`/`}
//         >
//           {title}
//         </Link>
//       </h3>
//     )
//   }
//   return (
//     <>
//     <Navbar />
//     <div
//       style={{
//         marginLeft: `auto`,
//         marginRight: `auto`,
//         maxWidth: rhythm(24),
//         padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//       }}
//     >
//       <header>{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.org">Gatsby</a>
//       </footer>

//     </div>
//     </>
//   )
// }

// export default Layout

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
      <div
        style={{
          // marginLeft: `auto`,
          // marginRight: `auto`,
          // maxWidth: "87.5%",
          // margin:"0 0"
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
