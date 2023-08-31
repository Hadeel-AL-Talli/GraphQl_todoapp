import {mongoose} from 'mongoose' ;





const db = "mongodb+srv://hadeeltali7:Hadeel1425360.@cluster0.qbxprdr.mongodb.net/test?retryWrites=true&w=majority";


 export const dbConnect =  async()=>{
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch(e){
        console.log(e);
    }
}

