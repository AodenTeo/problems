import React from 'react';
import ReactDOM from 'react-dom';

fetch('https://www.khanacademy.org/exercise/logarithms_1').then(response => {
    return response.json;
}).then(JSONresponse => {
    console.log(JSONresponse);
    return JSONresponse;
})