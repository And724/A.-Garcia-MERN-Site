import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeckList from '../components/DeckList';
import CreatePage  from './CreatePage';
import EditPage from './EditPage';


function DeckPage({ setDeck }) {

    const redirect = useNavigate();

    const [decks, setDecks] = useState([]);

    const showDecks = async () => {
        const response = await fetch('/log');
        const decks = await response.json();
        setDecks(decks);
    } 

    const onEditDeck = async deck => {
        setDeck(deck);
        redirect("/editDeck");
    }

    const onDeleteDeck = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const decks = await getResponse.json();
            setDecks(decks);
        } else {
            console.error(`Failed to delete deck with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        showDecks();
    }, []);

    
    return (
        <>
            <h2>List of Your Commander Decks</h2>
            <p>Add, update, and keep track of all your Commander Decks. Note, the deck color options are 
                combinations of: White, Black, Blue, Red, and Green.
            </p>
            <p>
            Deck color is dependent on your <strong>Commander's</strong> mana cost colors.
            </p>
            <DeckList 
                decks={decks} 
                onEdit={onEditDeck} 
                onDelete={onDeleteDeck} 
            />
        </>
    );
}

export default DeckPage;