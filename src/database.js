const mongoose = require('mongoose');
//const config = require('./config');
//const MONGODB_URI =  'mongodb://localhost/notes-app';
//const MONGODB_URI =  process.env.MONGODB_URI;
/*const NOTES_APP_MONGODB_HOST =  process.env.NOTES_APP_MONGODB_HOST;
const NOTES_APP_MONGODB_DATABASE =  process.env.NOTES_APP_MONGODB_DATABASE;*/


const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI =`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

console.log(MONGODB_URI);

(async () => {
    try {
      const db = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Mongodb is connected to", db.connection.host);
    } catch (error) {
      console.error(error);
    }
  })();