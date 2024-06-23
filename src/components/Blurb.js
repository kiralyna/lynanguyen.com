import React from 'react'
/*import data from '../data.json';*/
import '../App.css';

function Blurb() {
/*    const {} = data;*/

    return (
        <div id="tiles">
            <div id="blurb">
                <table id="tile-table">
                    <tbody id="tile-body">
                        <tr id="title">
                            <th id="tile-title">
                                <h3>About Me</h3>
                            </th>
                        </tr>
                        <tr id="blurb-body">
                            <p>In case you didn't see, my name is Lyna! I love writing, reading, hiking, and building stuff with code. My languages include Python, HTML, CSS, JavaScript, a bit of R, and a bit of C++. This website was built using the ReactJS framework! This project is a mix of personal and professional interests, showcasing my personality while keeping my coding skills in practice. As you can tell, I have a strong sense of nostalgia for the early 2000s. It's still a work-in-progress so don't judge too harshly!</p>
                            <p>Traveling is another one of my hobbies when time (and money) allows. I'm happy in a car roadtripping or on a plane watching clouds. My life revolves around my two dogs, Molly and Luna. Any free time I'm left with is used piecing together puzzles. Currently, I'm happy with 1000-piece puzzles but I'm considering bumping up the difficulty.</p>
                            <p>My main goal is to build and increase my knowledge in information technology and cybersecurity while also keeping my coding and scripting knowledge in practice. There is no greater satisfaction than a piece of code working properly after hours of debugging, like putting in the final piece of the puzzle. Front end development allows me to flex my creativity, while back-end development is a bit more challenging (in a good way!) for me and allows me to add functionality.</p>
                            <p>I love learning and consistently bettering myself, so any challenges that come my way are met with ambition and enthusiasm!</p>
                            <p>My next goals for this website are to add my portfolio as a "Top 8 Friends" section, make it mobile-friendly, and make a few stylistic edits.</p>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blurb