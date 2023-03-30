import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePage = () => {
    const [deckName, setDeckName] = useState('Cool and Fair Deck');
    const [commanderName, setCommanderName] = useState('Urza');
    const [deckColors, setDeckColors] = useState('White, Black, Blue, Red, Green');
    const [numberOfLands, setNumberOfLands] = useState('37');
    const [dateCompleted, setDateCompleted] = useState();
    
    const nav = useNavigate();

    const addDeck = async () => {
        const newDeck = {deckName, commanderName, deckColors, numberOfLands, dateCompleted};

        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newDeck),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert('You have successfully created a new deck!')
        } else {
            alert(`Your deck has not been created due to missing values. Status code: ${response.status}`)
        }
        nav("/log")
    };

    return (
        <>
        <h2>Magic the Gathering Commander Deck Inventory</h2>
        <article>
        <p>Create your new Commander deck!</p>
        <table className='createTable'>
        <caption className='deckListCap'>Add your Commander deck's information.</caption>
            <thead>
                <tr>
                    <th>Deck Name</th>
                    <th>Commander Name</th>
                    <th>Deck Colors</th>
                    <th># Of Lands</th>
                    <th>Date Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label htmlFor="deckName" className="required">
                        <input type="text" value={deckName} id="deckName" name="deckName"
                                onChange={d => setDeckName(d.target.value)} required autoFocus
                        />
                        </label></td>
                    <td><label htmlFor="commanderName" className="required">
                        <input type="text" value={commanderName} id="commanderName" name="commanderName"
                                onChange={d => setCommanderName(d.target.value)} required
                        />
                        </label></td>
                    <td><label htmlFor="deckColors" className="required">
                        <input type="text" value={deckColors} id="deckColors" name="deckColors"
                                onChange={d => setDeckColors(d.target.value)} required
                        />
                        </label></td>
                    <td><label htmlFor="numberOfLands" className="required">
                        <input type="number" value={numberOfLands} id="numberOfLands" name="numberOfLands"
                                onChange={d => setNumberOfLands(d.target.value)} required
                        />
                        </label></td>
                    <td><label htmlFor="dateCompleted" className="required">
                        <input type="date" value={dateCompleted} id="dateCompleted" name="dateCompleted"
                                onChange={d => setDateCompleted(d.target.value)} required
                                pattern="\d{2}-\d{2}-\d{2}"
                        />
                        </label></td>
                    <td>
                        <button className="add" onClick={addDeck}>Save Deck</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </article>
        </>
    )
};

export default CreatePage;