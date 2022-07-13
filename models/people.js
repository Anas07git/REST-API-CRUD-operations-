const mongoose=require('mongoose')

const peopleSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    shortlisted:{
        type: Boolean,
        required:true,
        default:false



    }

})
module.exports=mongoose.model('People',peopleSchema)