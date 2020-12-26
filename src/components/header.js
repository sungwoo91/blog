import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import github from "../images/GitHub-Mark-Light-32px.png"

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="fixed w-full bg-yellow-300 z-50">
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto md:py-8 md:px-16">
        <button
          className="text-white w-8 h-8"
          onClick={() => alert("승민이 안녕!")}
        >
          {/* <svg
            className="fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg> */}
        </button>

        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-2xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        <a href="https://github.com/sungwoo91">
          <img alt="github link" src={github} />
        </a>
      </div>
    </header>
  )
}

export default Header
