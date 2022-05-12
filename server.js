const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
require ('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();
const {checkUser, requireAuth} = require('./middleware/auth.middleware');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieparser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
})


//routes
app.use('/api/user', userRoutes);


//server
app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT}`);
})