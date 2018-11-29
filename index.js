// implement your API here
const express = require ('express'),
      db = require ('./data/db'),
      server = express(),
      PORT = 4000;

server.get('/', (req, res) =>{
    res.send({message :'Request Received'});
});

server.get('/api/users', (req, res) =>{
    db.find()
    .then((users) =>{res.json(users)})
    .catch( err => { res.json({messages: 'failed to get users'})})
});


server.get('/api/users/:id', (req, res) =>{
    const {id} = req.params;
    db.findById(id)
    .then(user=>{
        if (user){res.json(user)}
        else{
            res
            .status(404)
            .json({ messages :"User doesn't exist"});
        }})
    .catch( err => {
         res
         .status(500)
         .json({messages: 'failed to get user'})});
});
server.listen(PORT, () =>{
    console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`)
});