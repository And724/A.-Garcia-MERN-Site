
import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";


function StaffPage() {
    const [results, setResults] = useState([]);
    const retrieveResults = () => {
        fetch('https://randomuser.me/api/?results=10')
        .then((serverResponse) => serverResponse.json())
        .then((serverResponse) => {
            setResults(serverResponse.results);
        })
        .catch(() => {
            alert("Random User Generator Server is down. Please exit and try again.")
        })
    };

    return(
        <>
            <h2>Staff</h2>
            <article>
                <p>Please click the button below. This will populate the below table with 10 random members of our staff.
                </p>
                <p className="buttonPara">
                    Please press this:
                    <button id="fromServer" value="Call through express server."
                        className="myButtons" onClick={retrieveResults}>Data from server</button>
                </p>
                <table className="userTable">
                    <caption className="userTableCap">Staff Details and Contact Info</caption>
                    <thead>
                        <tr>
                            <th>ID Photo</th>
                            <th>Name & Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="randomUser"> 
                        {results.map((person, i) => <StaffRow person={person} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;