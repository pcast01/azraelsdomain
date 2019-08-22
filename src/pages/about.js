import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Sidebar from "../components/sidebar/Sidebar"
import paul from "../images/paul.jpg"

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <img src={paul} style={{ maxWidth: `200px` }} alt="me" />
            <h2 className="heading">About Me</h2>
            <p>
              <i style={{ fontSize: "22px" }}>
                Currently I am working as a .Net Full Stack Developer/React Dev
                with a passion to improve technology in order to achieve
                excellence. I have a Bachelors in Computer Science and have
                pursued knowledge of technology all my life. I love to automate
                processes and creatively solve problems.
              </i>
            </p>
            <br />
            <h3>TL;DR</h3>
            <ul>
              <li>
                <span role="img">🥇</span> Over 10 years of Web Developer
                experience
              </li>
              <li>
                <span role="img">💯</span> Solving tech problems is my thing
              </li>
              <li>
                <span role="img">🙌</span> Javascript/React
              </li>
              <li>
                <span role="img">🤘</span> Metal music is life
              </li>
              <li>
                <span role="img">🏍️</span> Motorcycle Enthusiast
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
