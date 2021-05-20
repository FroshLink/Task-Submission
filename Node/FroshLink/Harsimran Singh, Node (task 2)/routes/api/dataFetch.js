const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const url = "https://jsonplaceholder.typicode.com/photos";

// route - /api/titles/
// GET method
// fetches data from jsonplaceholder.typicode/photos and returns an array of titles

router.get('/', async (req, res) =>{

    const response = await fetch(url);
    var data = await response.json();
    const ans = new Array();

   data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            if(key == 'title'){
                ans.push(value);
            }
        });
    }); 
    res.status(200).send(ans);

   
});

module.exports = router;
