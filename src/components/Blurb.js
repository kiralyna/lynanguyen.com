import React from 'react'
import data from '../data.json';
import '../App.css';

function Blurb() {
    const {} = data;

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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blurb