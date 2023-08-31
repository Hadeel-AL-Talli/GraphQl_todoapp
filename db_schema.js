import {Schema, model} from 'mongoose';


const toDoSchema = new Schema({
    id :{
        type: String,
        required: true,
        unique: true

    },

    title: {
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true
    }

});

export const Todo = model('TODO', toDoSchema);