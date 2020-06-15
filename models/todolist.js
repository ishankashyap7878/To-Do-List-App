const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    worktype:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Task', todoSchema);

module.exports=Todo;