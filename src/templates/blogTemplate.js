import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

export default function Template({
  data,
  location, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  let disqusConfig = {
    siteUrl: `${"https://sungwoo.blog" + location.pathname}`,
    identifier: `${"https://sungwoo.blog" + location.pathname}`,
    title: frontmatter.title,
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Sungwoo Blog"
      />

      <div className="bg-white p-6">
        <div className="blog-post">
          <header className="px-4 py-12">
            <h1 className="font-bold text-2xl md:text-3xl">
              {frontmatter.title}
            </h1>
            <h2 className="font-light">{frontmatter.date}</h2>
          </header>

          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <CommentCount config={disqusConfig} placeholder={""} />
      <Disqus config={disqusConfig} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
