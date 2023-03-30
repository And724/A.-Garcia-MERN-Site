import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const deckDataBase = mongoose.connection;

deckDataBase.once("open", (err) => {
    if(err) {
        res.status(500).json({error: '500: Sorry, connection to the server has failed. Please try again.'})
    }
    else {
        console.log("Successfully connected Magic the Gathering Commander Deck collection database using Mongoose!");
    }
});

const deckSchema = mongoose.Schema({
    deckName:       { type: String, required: true },      
    commanderName:  { type: String, required: true },
    deckColors:     { type: String, 
                      required: true,
                      default: 'White, Black, Blue, Red, Green' },
    numberOfLands:  { type: Number, 
                      required: true,
                      default: 37,
                      min: [1, 'Please do not go below 30 lands'] },
    dateCompleted:  { type: Date, required: true, 
                      min: '2023-03-08', 
                      default: Date.now }
});

const Deck = mongoose.model("Deck", deckSchema);

const createDeck = async (deckName, commanderName, deckColors, numberOfLands, dateCompleted) => {
    const deck = new Deck({
        deckName: deckName,
        commanderName: commanderName,
        deckColors: deckColors,
        numberOfLands: numberOfLands,
        dateCompleted: dateCompleted
    });
    return deck.save();
};

// Find decks using filter
const findDeck = async() => {
    const query = Deck.find();
    return query.exec();
};

// Find with ID
const findDeckId = async (_id) => {
    const query = Deck.findById({_id: _id});
    return query.exec();
};



const updateDeck = async (_id, deckName, commanderName, deckColors, numberOfLands, dateCompleted) => {
    const result = await Deck.replaceOne({_id: _id }, {
        deckName: deckName,
        commanderName: commanderName,
        deckColors: deckColors,
        numberOfLands: numberOfLands,
        dateCompleted: dateCompleted
    });
    return { 
        _id: _id, 
        deckName: deckName,
        commanderName: commanderName,
        deckColors: deckColors,
        numberOfLands: numberOfLands,
        dateCompleted: dateCompleted
    }
}


const deleteDeckId = async (_id) => {
    const result = await Deck.deleteOne({_id: _id});
    return result.deletedCount;
};

export { createDeck, findDeck, findDeckId, updateDeck, deleteDeckId };