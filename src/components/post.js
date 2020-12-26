/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"

const Post = ({ link, title, description }) => {
  return (
    <li className="flex flex-row p-6 bg-white m-4 h-24">
      <article className="">
        <header className="font-medium text-lg">
          <Link to={link} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </header>
        <span className="text-sm font-extralight">
          {new Date(Date.now()).toDateString()}
        </span>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}

export default Post
