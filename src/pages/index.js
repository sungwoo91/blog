import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// eslint-disable-next-line import/no-unresolved
import Post from "../components/post"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Sungwoo Blog"
      />

      <ol className="">
        <h1 className="text-left font-medium m-4 text-2xl">Posts</h1>
        <Post
          link={"/blog/my-first-post/"}
          title={
            "Go to my first Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
        <Post
          link={"/blog/my-second-post/"}
          title={
            "Go to my second Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
        <Post
          link={"/blog/my-second-post/"}
          title={
            "Go to my second Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
        <Post
          link={"/blog/my-second-post/"}
          title={
            "Go to my second Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
        <Post
          link={"/blog/my-second-post/"}
          title={
            "Go to my second Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
        <Post
          link={"/blog/my-second-post/"}
          title={
            "Go to my second Markdown blog postGo to my first Markdown blog post"
          }
        ></Post>
      </ol>
    </Layout>
  )
}

export default IndexPage
