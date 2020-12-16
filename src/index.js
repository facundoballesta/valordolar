const express = require('express');
const path = require('path');

//Init
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.json());

//Routes

//Public Files
app.use(express.static(path.join(__dirname, 'public')))

//App Listent
app.listen(app.get('port'), () =>{
    console.log("Server Running on port", app.get('port'))
})