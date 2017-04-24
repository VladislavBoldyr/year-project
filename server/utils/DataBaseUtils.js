import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Word';

const Word = mongoose.model('Word');
const MongoClient = require('mongodb').MongoClient;

export function setUpConnection() {
      mongoose.connect(`mongodb://localhost:27017`);
    //mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
  let col =
    //return Word.find({});
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
