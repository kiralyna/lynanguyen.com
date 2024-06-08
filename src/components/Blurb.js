import React from 'react'
import data from '../data.json';
import '../App.css';

function Blurb() {
    const { email, linkedin, instagram, addFriendIcon, favoritesIcon, messageIcon } = data;

    return (
        <div id="tiles">
            <div id="blurb">
                <table id="contact-me">
                    <tbody id="contact-body">
                        <tr id="title">
                            <th id="contact-title">
                                <h3>Contacting Lyna</h3>
                            </th>
                        </tr>
                        <tr id="email">
                            <td id="contact-email">
                                <img alt ="mail icon" src = {messageIcon}></img>
                                <a href = {email} >Send Message</a><br/>
                            </td>
                        </tr>
                        <tr id="linkedin">
                            <td id="contact-linkedin">
                                <img alt ="add icon" src = {addFriendIcon}></img>
                                <a href = {linkedin} target = "_blank" >Add to Friends</a><br/>
                            </td>
                        </tr>
                        <tr id="insta">
                            <td id="contact-insta">
                                <img alt ="add icon" src = {favoritesIcon}></img>
                                <a href = {instagram} target = "_blank" >Add to Favorites</a><br/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blurb