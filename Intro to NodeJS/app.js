const express = require('express');
const ejs = require('ejs');
const App = express();
App.set('view engine', 'ejs');

//routes
App.get('/', (req, res)=>{
    const users = [{name: 'Sudhanshu'}, {name: 'Kumar'}, {name: 'Sudh'}];
    let randomUser = Math.floor(Math.random()* users.length);
    let name = users[randomUser].name
    res.render('index', {name: name});
})


App.get('/about', (req, res)=>{
    res.render('about')
})

App.get('*', (req, res)=>{
    res.send('<h1>404, Page not found Page</h1>')
})

App.listen(3000)