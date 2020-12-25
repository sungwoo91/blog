import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import toto from "../images/toto.jpeg"  ;

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={toto}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          안녕, 블로그 테스트 중이야
        </h2>

        <p className="leading-loose">
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
