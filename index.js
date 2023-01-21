const express = require('express')
const app = express()
const port = 3000

const db = {
    members : [
        {name: 'alex', id: '2342fs', spec: 'front-end' },
        {name: 'dave', id: 'ds25dw2', spec: 'back-end'},
        {name: 'micke', id: '1fsa13', spec: 'dev-ops'}
    ],
    location : {
        city: 'New York',
        language: 'english'
    }
}

app.get('/members', (req, res) => {
  res.send(db.members)
})

app.get('/members/:name', (req, res) => {
    const name = req.params.name;

    const foundMember = db.members.find(member => member.name === name);

    if (foundMember == undefined) {
        res.send('404 Error');
    } else {
        res.send(foundMember);
    }
  })

app.get('/location', (req, res) => {
    res.send(db.location)
  })

app.listen(port, () => {
    console.log('Success! Port is opended.')
})