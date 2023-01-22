const express = require('express')
const app = express()
const port = 3000

const db = {
    members: [
        {id: 1, name: 'alex', spec: 'front-end'},
        {id: 2, name: 'dave', spec: 'back-end'},
        {id: 3, name: 'micke', spec: 'dev-ops'}
    ],
    location: {
        city: 'New York',
        language: 'english'
    },
    skills: {
        experience: '+5years',
        remote: true
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

app.get('/skills', (req, res) => {
    res.send(db.skills)
  })

app.get('/location', (req, res) => {
    res.send(db.location)
  })

app.listen(port, () => {
    console.log('Success! Port is opended.')
})