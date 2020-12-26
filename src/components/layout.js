import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-100">
      <Header />

      <main className="flex-1 w-full max-w-6xl px-4 py-24 mx-auto md:px-8 md:py-32">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200">
        <nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-black">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://github.com/sungwoo91"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUNGWOO
            </a>
          </p>
        </nav>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
