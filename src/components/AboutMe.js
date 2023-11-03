import React from 'react';
import data from '../data.json';
import '../style/AboutMe.css';

function AboutMe() {
    const { displayName, sex, age, location, onlineNow, lastLogin, mood, emoji, defaultPic, pics, videos } = data;
    let today = new Date().toLocaleDateString("en-US");

    return (
    <div className="about-me-container">
        <table>
            <th>
                <div className="display-name" >
                    {displayName}
                </div>
            </th>
            <tr>
                <td className="default-pic-cell">
                    <div className="default-pic">
                            <img alt ="profile picture" src = {defaultPic}/>
                    </div>
                </td>
                <td className="asl-info-cell">
                    <div className="asl-info" >
                        {age} <br/>
                        {sex} <br/>
                        {location} <br/>
                        <img alt ="myspace online now" src = {onlineNow}/><br/>
                        <text>Last Login:</text><br/>
                        {today} <br/>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="mood-cell">
                    <div className="mood">
                        <b>Mood: </b>{mood} {emoji}<br/>
                        View My: <a href = {pics} target = "_blank" >Pics</a> | <a href = {videos} target = "_blank">Videos</a>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default AboutMe