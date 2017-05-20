import mongoose from "mongoose";

import config from '../../etc/config.json';

//import '../models/Word';

const WordSchema =  mongoose.Schema({
    words   :  [String]
});


const Word = mongoose.model('Irregular_verbs',WordSchema,'Irregular_verbs');
const MongoClient = require('mongodb').MongoClient;



export function setUpConnection() {
    //mongoose.connect('mongodb://localhost/Irregular_verbs');
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

    let db =   mongoose.connection;
    db.on('error', function(err) {console.error("connection error;", err)});
}

export function listNotes(verb) {
    return Word.findOne({words:{$in:[verb]}},(err,words) => {
      if (err) return console.error("error");
    });
}
export function findOneElement (verb) {
  //console.log(verb);
  return; 
}

/*export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}*/

/*export function deleteNote(id) {
    return Note.findById(id).remove();
}*/
