import React from "react"
import {
  FaYoutubeSquare,
  FaGithubSquare,
  FaStackOverflow,
  FaRedditSquare,
  FaTwitterSquare,
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
  return (
    <div className="bottom-bar py-1">
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

export default MobileSocialLinks
