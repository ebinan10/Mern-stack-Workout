const express = require('express');
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv').config()
const WorkOutRouter = require('./router/Workout')
const UserRouter = require('./router/User')
const SessionRouter = require('./router/Session')
const cors = require('cors')
const session = require('express-session');
const Store = require('./database/Session')
// const cookieParser = require('cookie-parser')




    Store.on('error', function(err){
        if(err){
            console.log(err)
        }
           else{
            console.log('store on')
           } 
        
        
    })

app.use(express.json());
app.use(cors({origin:true,credentials: true} ))
     

mongoose.connect(process.env.Url)
.then(()=>{
    app.listen(process.env.Port, console.log('connected to DB and localhost running on port 4000'))
    
    
    app.use( 
        session({
        secret: 'secret key',
        cookie: { 
        maxAge: 1000*3600*24*7,
        httpOnly: false,
        secure: false,
        },
        store:Store,
        resave: false, 
        saveUninitialized: false
    
        }))
    app.use('/session',SessionRouter)
    app.use('/', WorkOutRouter)
    app.use('/user', UserRouter)
   
   
    
    
    
        
        
}).catch((error)=>{
        console.log(error) 
})
