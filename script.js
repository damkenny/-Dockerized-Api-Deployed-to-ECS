// import required packages needed
const express = require('express'); //Import Express
const Joi = require('joi'); //Import Joi
const app = express(); //Create Express Application on the app variable
app.use(express.json()); //used the json file
const bodyParser = require('body-parser');
 
//Give data to the server
const users = [
{name: 'Foo Barrigton', id: 1},
{name: 'Jane Doerty', id: 2},
{name: 'John Douglas', id: 3},
{name: 'Merryweather', id: 4},
{name: 'Snowly', id: 5}
]

//Read Request Handlers
// Display the Message when the URL consist of '/'

app.get('/', (req, res) => {
    res.send('creating new API!');
    });
    // Display the List Of users when URL consists of api/interns
    app.get('/api/interns', (req,res)=> {
    res.send(users);
    });
    // Display the Information Of Specific Customer when you mention the id.
    app.get('/api/interns/:id', (req, res) => {
    const newintern = users.find(c => c.id === parseInt(req.params.id));
    
    //If there is no valid users ID, then display an error with the following message
    if (!newintern) res.status(404).send('error');
    res.send(newintern);
    });
//  creating a post request handler adding new information- to the server
    app.post('/api/interns', (req, res) => {
    const newintern = { 
         id: users.length + 1,
         name: req.body.name      
    }
    users.push(newintern);
    console.log(req.body.name);
    res.send(req.body.name)
    });

// //PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


//  testing using postman
//  push to github
// next to create a docker file to containerized the api.




