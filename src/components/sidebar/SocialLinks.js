import React from "react"
import {
  FaGithubSquare,
  FaStackOverflow,
  FaTwitterSquare,
  FaRedditSquare,
  FaYoutubeSquare,
} from "react-icons/fa"
import "./sidebar.css"

const SocialLinks = ({ contacts }) => {
  return (
    <div className="side-social-links float-left mt-3 mb-3">
      <a className="text-secondary p-2" href={contacts.reddit}>
        <span title="Reddit">
          <FaRedditSquare size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a className="text-secondary p-2" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a className="text-secondary p-2" href={contacts.stackoverflow}>
        <span title="Stack Overflow">
          <FaStackOverflow size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a className="text-secondary p-2" href={contacts.youtube}>
        <span title="YouTube">
          <FaYoutubeSquare size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a className="text-secondary p-2" href={contacts.twitter}>
        <span title="Twitter">
          <FaTwitterSquare size={26} style={{ color: "secondary" }} />
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
