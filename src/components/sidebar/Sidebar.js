import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"
import SocialLinks from "./SocialLinks"
import TechTags from "./TechTags"
import DarkModeToggle from "../DarkModeToggle"

const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteBioQuery {
          site {
            siteMetadata {
              title
              tagline
              author
              contacts {
                github
                reddit
                youtube
                stackoverflow
                twitter
              }
              bio
              labels {
                tag
                tech
                name
                size
                color
              }
            }
          }
          allMarkdownRemark(
            limit: 10
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {console.log("sidebar data", data.site.siteMetadata.contacts)}
          <div className="sidebar-main border-right">
            <Bio
              author={data.site.siteMetadata.author}
              tagline={data.site.siteMetadata.tagline}
              bio={data.site.siteMetadata.bio}
            />
            <SocialLinks contacts={data.site.siteMetadata.contacts} />
            <div className="page-links" style={{ marginTop: "80px" }}>
              <Link to="/">
                <span className="text-dark d-block py-1">Blog Home</span>
              </Link>
              <Link to="/about">
                <span className="text-dark d-block py-1">About</span>
              </Link>
              <Link to="/archive">
                <span className="text-dark d-block py-1">Archive</span>
              </Link>
            </div>
            <DarkModeToggle />
            <div className="tech-tags mt-4">
              <TechTags
                labels={data.site.siteMetadata.labels}
                posts={data.allMarkdownRemark.edges}
              />
            </div>
          </div>
        </>
      )}
    />
  )
}

export default Sidebar
