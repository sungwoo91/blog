import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import github from "../images/GitHub-Mark-Light-32px.png"

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false)
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
        <button className="text-white" onClick={() => alert("승민이 안녕!")}>
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-2xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        {/* <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}
        <a href="https://github.com/sungwoo91">
          <img alt="github link" src={github} />
        </a>
        {/* <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/tech`,
              title: `Tech`,
            },
            {
              route: `/Life`,
              title: `Life`,
            },
          ].map(link => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav> */}
      </div>
    </header>
  )
}

export default Header
