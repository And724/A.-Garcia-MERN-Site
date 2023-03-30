import React from 'react';
import DeckRow from './DeckRow';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";

 
function deckTable({decks, onDelete, onEdit}) {
    return (
        <table id="decks" className="logPageTable">
            <caption className='deckListCap'>Add and Edit Deck <Link to="/addDeck"><IoIosAddCircle/></Link></caption>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Update</th>
                    <th>Deck Name</th>
                    <th>Commander Name</th>
                    <th>Deck Colors</th>
                    <th># Of Lands</th>
                    <th>Date Completed</th>
                </tr>
            </thead>
            <tbody>
                {decks.map((deck, i) => 
                    <DeckRow
                        deck={deck} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default deckTable;
