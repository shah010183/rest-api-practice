var express = require('express');
var util = require('util')
var app = express();
var port = process.env.PORT || 3000;
var todos = [{
   id: 1,
   description: 'meet mom for lunch',
   completed: false
},{
  id: 2,
  description: 'go to market',
  completed: false
},{
  id: 3,
  description: 'feed the cat',
  completed: true
}];

app.get('/', function(req,res){
  res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req,res){
  res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req,res){
//  res.send('Request with id: '+ req.params.id);
  var todoId = req.params.id;
  var todoObj;
  todos.forEach(function(todo){
     console.log (todo.description);
     if (todo.id.toString() === todoId) {
        todoObj = todo;
        console.log("todoObj in for loop that matched: " + util.inspect(todoObj, false, null));
        res.json(todoObj);
     } else {
       res.status(404).send();
     }
  });
//  console.log("todoObj: " + util.inspect(todoObj, false, null));

});

app.listen(port, function(){
  console.log('Server started ...');
});
