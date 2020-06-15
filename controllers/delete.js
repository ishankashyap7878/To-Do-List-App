const Todo=require('../models/todolist');
module.exports.remove=function(req,res)
{
    let id=req.query.id;
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error');
            return;
        }
        return res.redirect('back');
    })

}