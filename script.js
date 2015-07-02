function Todos (Title, description)
this.title = title;	
this.description = description;



ToDo.all = [];

ToDo.prototype.save = function(){
	ToDo.all.push(this);
	console.log(ToDo.all);
}


var toDoName = $('#todo-name').val();
var toDoDesc = $('#todo-desc').val();
var toDoData = {name: toDoName, desc: toDoDesc};


toDos.push(toDoData);


$toDoList.append('<li class="todo">' + toDoData.name + ' - ' + toDoData.desc + '</li>');


$newToDo[0].reset();
$('#todo-name').focus();
});


$toDoList.on('click', '.todo', function() {
	$(this).addClass("done");
})

};

