import React from 'react'
import data from '../data.json'

function AboutMe() {
    const { displayName, sex, age, location, lastLogin, mood, emoji, defaultPic } = data;
    return (
    <div className="about-me-container">
        <div className="display-name" align = "left" >
            <b>{displayName}</b>
        </div>
        <div className="default-pic">
            <img alt ="profile picture" src = {defaultPic} width = "300px" align = "left" />
        </div>
        <div className="asl-info" align = "left" >
            {age} <br/>
            {sex} <br/>
            {location} <br/>
            {lastLogin} <br/>
        </div>
        <div className="mood">
            <p><b>Mood: </b>{mood} {emoji}</p>
        </div>
    </div>
  )
}

export default AboutMe