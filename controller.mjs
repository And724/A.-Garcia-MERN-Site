import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as decks from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.post('/log', (req,res) => {
    decks.createDeck(
        req.body.deckName,
        req.body.commanderName,
        req.body.deckColors,
        req.body.numberOfLands,
        req.body.dateCompleted
    )
    .then(deck => {
        res.status(201).json(deck);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'Your deck was not saved. Try again.'});
    });
});


app.get('/log', (req, res) => {
    decks.findDeck()
        .then(deck => { 
            if (deck !== null) {
                res.json(deck);
            } else {
                res.status(404).json({ Error: 'This deck does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Deck retrieval failed. Try again.' });
        });
});


app.get('/log/:_id', (req, res) => {
    decks.findDeckId(req.params._id)
    .then(deck => { 
        if (deck !== null) {
            res.json(deck);
        } else {
            res.status(404).json({ Error: 'This deck does not exist.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Deck retrieval failed. Try again.' });
    });

});

app.put('/log/:_id', (req, res) => {
    decks.updateDeck(
        req.params._id, 
        req.body.deckName,
        req.body.commanderName,
        req.body.deckColors,
        req.body.numberOfLands,
        req.body.dateCompleted
    )
    .then(deck => {
        res.json(deck);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Deck update has failed.' });
    });
});


app.delete('/log/:_id', (req, res) => {
    decks.deleteDeckId(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'This deck was not found. It no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The deletion of this deck has failed. Try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});