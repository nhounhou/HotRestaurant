// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// variables
let tables=[
    {
        customerName: 'Ahmed',
        customerId: 'afhaque89',
        customerEmail: 'ahmed@example.com',
        phoneNumber: '123-456-7890'
    },
];
let waitList=[
    {
        customerName: 'Saima',
        customerId: 'saimaCool',
        customerEmail: 'saima@example.com',
        phoneNumber: '987-654-3210'
    },
];

// Client GET Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/Solved/home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '/Solved/tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/Solved/reserve.html')));

// API routes
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitList));

// POST routes
app.post('/api/tables', (req, res) => {
    if (tables.length <= 4) {
        // console.log('true');
        const newtable = req.body;
        tables.push(newtable);

        return res.send(true);
    } else {
        // console.log('false');
        const newtable = req.body;
        waitList.push(newtable);
        return res.send(false);
    };
    // res.json(newCharacter);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
