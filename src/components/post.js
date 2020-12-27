import React from "react"
import { Link } from "gatsby"
import { PostType } from "./type"

const Post = ({ type, date, link, title }) => {
  return (
    <li className="flex flex-col p-4 bg-white m-4 h-40 md:h-24">
      <label
        className={
          "px-0.5 text-xs rounded w-min text-white " +
          (type === PostType.Tech ? "bg-yellow-300" : "bg-green-300")
        }
      >
        {type}
      </label>
      <span className="text-sm font-light">{date}</span>
      <article>
        <header className="font-medium text-lg">
          <Link to={link} itemProp="url">
            <span itemProp="headline ">{title.slice(0, 80)}</span>
          </Link>
        </header>
      </article>
    </li>
  )
}

export default Post
