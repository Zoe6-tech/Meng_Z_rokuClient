const express = require('express');
const router = express.Router();

//this is where would add our middleware
const{createProxyMiddleware} = require('http-proxy-middleware');

//middleware is connnect client and server, roku server 5000
//curl localhost:5000/api
//curl localhost:5000/api/movies/1
router.use('/api', createProxyMiddleware({
        target : 'http://localhost:5000',
        header:{
            accept:'application/json, application/x-www-form-urlencoded'
        },
        changeOrigin:true
}))

//
router.get('/', (req, res) => {
    res.render('index', {message :"Hello from handlebars"})
    //res.send('hit the main route');
})

router.get('/portfolio', (req, res) => {
    res.render('artwork', { portmessage:"you are on portfolio page"})
})

module.exports = router;