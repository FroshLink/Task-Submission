import React, { useState, useEffect } from 'react';
import './App.css';
import Getlist from './component/getlist';

function App() {
    const [gaay, setgaay] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
            .then(data => {
                setgaay(data)

            })

    }, [])

    return ( < div className = "App" >

        {
            gaay.map((hey, hello) => {
                return <Getlist data = { hey }
                key = { hello }
                />
            })
        } < /div>
    );
}

export default App;