import Features from "../Component/Features";
import Hero from "../Component/Hero";
import Layout from "../Component/Layout"
import React from "react";
import TrustedBy from "../Component/TrustedBy";
function Home() {
  return (
    <Layout>
      <main>
      <Hero/>
        <Features/>
        <TrustedBy/>
      </main>
        
    </Layout>
  )
}

export default Home