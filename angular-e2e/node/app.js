const express = require('express')
const cors = require("cors");
const app = express()
app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.use(express.json());

const usersList = [
    { userId: 1, name: 'admin', designation: "Developer", experience: '10 year', password: 'Admin@12' },
]

const PORT = 8000;


app.get('/', (req, res) => {
    res.send('you can get list of users from ' + ` localhost:${PORT}/users/get-user-list`)
});

app.get('/employees/get-employee-list', (req, res) => {
    // res.send(usersList)
    res.status(200).send({ result: { usersList, responseMessage: 'Success', statusCode: 200 } })
});

app.get('/employees/get-employee/:userId', (req, res) => {
    const user = usersList.find(c => c.userId === parseInt(req.params.userId));
    res.send(user)
});

app.post('/employees/add-employee', (req, res) => {
    var id = 1;
    for (let i = 1; i < usersList.length + 1; i++) {
        usersList.forEach(element => {
            if (id == element.userId) {
                id += 1
            }
            else {
                return id
            }
        })
    }
    const user = {
        userId: id,
        name: req.body.name,
        designation: req.body.designation,
        experience: req.body.experience
    }
    usersList.push(user)
    res.status(200).send({ result: { user, responseMessage: 'Success', statusCode: 200 } })
    // res.send(user)
})

app.put('/employees/get-employee/:userId', (req, res) => {
    const user = usersList.find(c => c.userId === parseInt(req.params.userId));
    user.name = req.body.name
    user.designation = req.body.designation
    user.experience = req.body.experience
    res.send(user)
});

app.delete('/employees/delete-employee/:userId', (req, res) => {
    const user = usersList.find(c => c.userId === parseInt(req.params.userId));
    usersList.splice(usersList.indexOf(user), 1)
    res.send(user)
})

app.post('/login', (req, res) => {
    const userName = req.body.name;
    const user = usersList.find(c => c.name === userName);
    // console.log(user, userName);
    if (user) {
        res.status(200).send({ result: { user, responseMessage: 'Success', statusCode: 200 } })
    }
    else {
        res.status(404).send({ result: { user, responseMessage: 'Not Found.', statusCode: 404 } })
    }
})

app.post('/password', (req, res) => {
    const pass = req.body.password;
    const user = usersList.find(c => c.password === pass);
    console.log(user, pass);
    if (user) {
        res.status(200).send({ result: { user, responseMessage: 'Success', statusCode: 200 } })
    }
    else {
        res.status(404).send({ result: { user, responseMessage: 'Not Found.', statusCode: 404 } })
    }
})


app.listen(PORT, console.log(`server is listening ${PORT}`))