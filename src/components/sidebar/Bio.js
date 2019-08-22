import React from "react"
import "./sidebar.css"
import azrael from "../../images/profile.png"

const Bio = ({ author, bio, tagline }) => {
  return (
    <div className="bio-main w-75">
      <img
        src={azrael}
        style={{ maxWidth: `100px` }}
        className="profile-img"
        alt="Azrael"
      />
      <h3 className="mt-2 author-bio">{author}</h3>
      <p>{bio}</p>
      <small className="text-muted">{tagline}</small>
    </div>
  )
}

export default Bio
