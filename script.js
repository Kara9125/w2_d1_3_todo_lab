$(function(){

var $newItemForm = $("#new_thing_to_do");
console.log($newItemForm);
var toDoList = [];

$newItemForm.on("submit", function(event){
	event.preventDefault();
	// console.log('form submitted');
	console.log($('#item_name').val()); 
	var $newLI = $('<li>' + $ ('#item_name').val() + '</li>');
	$('#to_do_list').append($newLI);

	toDoList.push({
		item_name : $('#item_name').val(),
		quantity : 1
			})
console.log(toDoList)


var item1 = { item_name: "olive oil",
			   quantity: 2
			   };

toDoList.push(item1);

 });
$('ul').on("click","li", function(){
	console.log("clicked")
	$(this).addClass("done");
})

});

