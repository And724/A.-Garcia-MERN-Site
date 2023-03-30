import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to="../">Home</Link>
            <Link to="../topics">WebDev Topics</Link>
            <Link to="../gallery">Gallery</Link>
            <Link to="../staff">Staff</Link>
            <Link to="../order">Order</Link>
            <Link to="../log">MtG Commander Decks</Link>
        </nav>
    );
}

export default Nav;