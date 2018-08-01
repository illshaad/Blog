import mongoose from 'mongoose'


const { Schema } = mongoose;
const articleModel = new Schema({
    Titre : { 
        type : String,required:true,
    },

    Date : {
        type: Date, 
    },

    Auteur : {
        type : String, required : true,
    },

    isPublished :{ 
    type : Boolean, 
    },

    Text : {
        type : String,
    }

    // Text2 :{
    // type :String
    // }
});

export default mongoose.model('Article', articleModel);
  