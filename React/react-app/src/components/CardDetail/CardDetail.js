import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id} = useParams();
    const [card, setCard] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCard(data));
    }, [id])

    return (
        <div className="d-flex justify-content-center">
            <div className="card " >
                <img src={card.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{card.title}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;