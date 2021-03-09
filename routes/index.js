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

// http://localhost:5050/
router.get('/', (req, res) => {
    res.render('index', {message :"Hello from handlebars"})
    //res.send('hit the main route');
})

//other routes you might use put here

//handle 404 error 
router.use((req, res) => {
    res.status(404);
    res.render("error", {
        layout:"errorLayout.hbs", errormessage: `You have lost your way, "${req.url}" does not exist`});
})

module.exports = router;