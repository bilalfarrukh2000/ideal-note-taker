const fs = require ('fs');
const express = require('express');
const app = express();
const path = require ('path');
const port = process.env.port || 3000;
const addedNotes = fs.readFileSync('./Develop/db/db.json');
const dataInput = JSON.parse(addedNotes);

app.use(express)
app.use(express.json());
app.use(express.static("./Develop/public"));

app.listen(port, function(){
    console.log(`Active port ${port}`);
    console.log(dataInput.length);
})

