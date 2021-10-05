import React, { useLayoutEffect, useRef } from "react"

const src = "https://utteranc.es/client.js"
const repo = "sungwoo91/blog"

const Utterances = () => {
  const ref = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    ref.current.appendChild(utterances)
  }, [])

  return <div ref={ref} />
}

export default Utterances
