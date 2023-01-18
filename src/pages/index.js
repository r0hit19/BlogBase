import * as React from "react"
import BlogList from "./component/BlogList";
import Layout from "./component/Layout"

export default function Home() {
  return (
    <div className="main">
    <Layout>
      <BlogList/>
    </Layout>
    </div>
  
    );
}
