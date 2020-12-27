import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              type
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Sungwoo Blog"
      />

      <ol className="">
        <h1 className="text-left font-medium m-4 text-2xl">Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.frontmatter.slug}
            date={node.frontmatter.date}
            link={node.frontmatter.slug}
            title={node.frontmatter.title}
            type={node.frontmatter.type}
          />
        ))}
      </ol>
    </Layout>
  )
}

export default IndexPage
