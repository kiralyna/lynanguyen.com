import React from 'react';
import data from '../data.json';
import '../App.css';

function AboutMe() {
    const { displayName, sex, age, location, onlineNow, mood, emoji, defaultPic, resume, videos } = data;
    let today = new Date().toLocaleDateString("en-US");

    return (
        <div id="tiles">
            <table id="about-me">
                <tbody id="about-body">
                    <tr id="name">
                        <th id="display-name">
                            <h1>{displayName}</h1>
                        </th>
                    </tr>
                    <tr id="about-me-row">
                        <td id="default-pic-col">
                            <div className="default-pic">
                                <img alt="" src = {defaultPic}/>
                            </div>
                        </td>
                        <td id="asl-info-col">
                            {age} <br/>
                            {sex} <br/>
                            {location} <br/>
                            <img alt="" src = {onlineNow}/><br/>
                            <text>Last Login:</text><br/>
                            {today} <br/>
                        </td>
                    </tr>
                    <tr id="about-mood">
                        <td id="mood">
                            <b>Mood:</b> {mood} {emoji}<br/>
                            View My: <a href = {resume} target = "_blank" rel="noreferrer">Resume</a> | <a href = {videos} target = "_blank" rel="noreferrer">Videos</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AboutMe