const TodoItem=require('../models/todo-item')

module.exports.home=async (req,res)=>{
    let TodoItems=await TodoItem.find({})
    // console.log(TodoItems);
    return res.render('home',{
        title: "My Todo App",
        todo_items: TodoItems
    })
}

module.exports.add=(req,res)=>{
    // console.log(req.body);
    TodoItem.create({
        title: req.body.title,
        description: req.body.description,
        target_date: req.body.date
    }).then((v)=>{
        // console.log('created ',v);
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
    return res.redirect('/')
}

module.exports.delete=async (req,res)=>{
    let id=req.query.id
    console.log(id);
    await TodoItem.findByIdAndDelete(id)
    return res.redirect('/')
}