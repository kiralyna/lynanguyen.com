import React from 'react'
import data from '../data.json';
import '../App.css';

function Contact() {
    const { email, linkedin, instagram, addFriendIcon, favoritesIcon, messageIcon } = data;

    return (
        <div id="tiles">
            <div id="contacting-lyna">
                <h3>Contacting Lyna</h3>
            </div>
            <div id="contact-body">
                <div id="contact-email">
                    <img alt ="mail icon" src = {messageIcon}></img>
                    <a href = {email} >Send Message</a><br/>
                </div>
                <div id="contact-linkedin">
                    <img alt ="add icon" src = {addFriendIcon}></img>
                    <a href = {linkedin} target = "_blank" >Add to Friends</a><br/>
                </div>
                <div id="contact-insta">
                    <img alt ="add icon" src = {favoritesIcon}></img>
                    <a href = {instagram} target = "_blank" >Add to Favorites</a><br/>
                </div>
            </div>
        </div>
    )
}

export default Contact 