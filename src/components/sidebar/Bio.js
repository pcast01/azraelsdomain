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
      {/* <p style={{ fontSize: "15px" }}>{bio}</p> */}
      <ul className="text-muted" style={{ listStyle: "none" }}>
        <li style={{ marginBottom: "7px" }}>👨‍💻Developer</li>
        <li style={{ marginBottom: "7px" }}>👪Family Man</li>
        <li style={{ marginBottom: "7px" }}>🥁Drummer</li>
        <li style={{ marginBottom: "7px" }}>🛦Air Force Veteran</li>
      </ul>
      <h3 className="text-muted">{tagline}</h3>
    </div>
  )
}

export default Bio
