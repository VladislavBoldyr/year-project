import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word   : { type: String },
});

 mongoose.model('Irregular_verbs', WordSchema);
