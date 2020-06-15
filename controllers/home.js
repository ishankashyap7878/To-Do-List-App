const Todo=require('../models/todolist');
module.exports.basic=function(req,res)
{
    Todo.find({},function(err,task){
    if(err)
    {
        console.log('Error');
        return;
    }
    return res.render('home',{
        title:"To Do List App",
        todolist:task
    });
    });
}