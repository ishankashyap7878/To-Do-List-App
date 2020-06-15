const Todo=require('../models/todolist');
module.exports.create=function(req,res)
{
    Todo.create(
    {
        worktype:req.body.work,
        category:req.body.category,
        date:req.body.date
    },
    function(err,newTask){
        if(err)
        {
            console.log("There is an error in creating the Todo List");
            return;
        }
        console.log('Done',newTask)
        return res.redirect('back');
    })
}