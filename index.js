const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is my second node practice again. Hello world! from today, yes This is working')
})


const users =
    [
        { id: 0, name: 'shabana', email: 'shabana@email.com', tel: '0111122223333' },
        { id: 1, name: 'bobita', email: 'shabana@email.com', tel: '0111122223333' },
        { id: 2, name: 'sucorita', email: 'shabana@email.com', tel: '0111122223333' },
        { id: 3, name: 'anjona', email: 'shabana@email.com', tel: '0111122223333' },
        { id: 4, name: 'purnimaa', email: 'shabana@email.com', tel: '0111122223333' }
    ]


app.get('/users', (req, res) => {
    const search = req.query.name;
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
    if (search) {
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)


    console.log('hitting THE POST', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli')
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'bananba', 'apple', 'orange'])
})

app.listen(port, () => {
    console.log('Starting Port:', port);
})