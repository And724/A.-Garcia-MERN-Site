import React from "react";
import { IoMdCog } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

function DeckRow({ deck, onEdit, onDelete }) {
    return (
        <tr>
            <td><IoMdCloseCircle onClick={() => onDelete(deck._id)} 
            className='reactIcon'/></td>
            <td><IoMdCog onClick={() => onEdit(deck)}
            className='reactIcon'/></td>
            <td>{deck.deckName}</td>
            <td>{deck.commanderName}</td>
            <td>{deck.deckColors}</td>
            <td>{deck.numberOfLands}</td>
            <td colSpan="2">{deck.dateCompleted.slice(0,10)}</td>
        </tr>
    );
}

export default DeckRow;