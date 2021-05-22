import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div>
            <h3>cards</h3>
            <p>There are {cards.length} cards.</p>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                {
                    cards.map(card => <Card card={card}></Card>)
                }
                </div>
            </div>
        </div>
    );
};

export default Cards;