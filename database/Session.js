const express = require('express')
const app = express()
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);
const env = require('dotenv').config()

const Store = new MongoDbStore({
    uri: process.env.Url,
    databaseName:'store',
    collection:'store'
}
, function(error){
    if(error){
     console.log(error)
    }
    else{
        console.log('store should be created')
    }
}
)


module.exports = Store;
 