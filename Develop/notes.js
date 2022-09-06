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

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.get('/notes',function(req,res){
    res.sendFile(path.join(__dirname,'/public/notes.html'));
})

app.get('/api/notes',function(req,res){
    res.json(dataInput);
})

app.post('/api/notes',function(req,res){

    const text = {
        id: dataInput.length+1,
        title: req.body.title,
        text: req.body.text,
    }
    
    dataInput.push(text);
    let dataToWrite=JSON.stringify(dataInput);
    fs.writeFileSync('./db/db.json',dataToWrite);
    res.send(dataInput);
    
}) 