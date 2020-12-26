import React from "react"
import { Link } from "gatsby"

const Post = ({ date, link, title }) => {
  return (
    <li className="flex flex-col p-4 bg-white m-4 h-40 md:h-24">
      <span className="text-sm font-light">{date}</span>
      <article>
        <header className="font-medium text-lg">
          <Link to={link} itemProp="url">
            <span itemProp="headline ">{title.slice(0, 80)}</span>
          </Link>
        </header>
        {/* <section>
          <p
            className=" font-light"
            dangerouslySetInnerHTML={{
              __html: "desc",
            }}
            itemProp="description"
          />
        </section> */}
      </article>
    </li>
  )
}

export default Post
