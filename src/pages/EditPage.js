import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditPage = ({deck}) => {
    const [deckName, setDeckName] = useState(deck.deckName);
    const [commanderName, setCommanderName] = useState(deck.commanderName);
    const [deckColors, setDeckColors] = useState(deck.deckColors);
    const [numberOfLands, setNumberOfLands] = useState(deck.numberOfLands);
    const [dateCompleted, setDateCompleted] = useState(deck.dateCompleted.slice(0,10));
    
    const nav = useNavigate();

    const editDeck = async () => {
    
        const response = await fetch(`/log/${deck._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                deckName: deckName,
                commanderName: commanderName,
                deckColors: deckColors,
                numberOfLands: numberOfLands,
                dateCompleted: dateCompleted
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            nav('/log');
            alert('You have successfully edited one of your decks!')
        } else {
            const eMessage = await response.json();
            nav('/log');
            alert(`Your deck has not been edited due to missing values. Status code:${response.status}. ${eMessage}`)
        }
        nav("/log")
    };

    return (
        <>
        <h2>Magic the Gathering Commander Deck Update</h2>
        <article>
        <p>Choose a deck to update.</p>
        <table className='createTable'>
        <caption>Add your Commander deck's information.</caption>
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
                        <button className=".myButtons" onClick={editDeck}>Update Deck</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </article>
        </>
    )
};

export default EditPage;