(function () {
	'use strict';
	function Application() {
		this.items = [];
	}
	
	window.Application = Application;
}());

var app = new Application();

document.querySelector('#add').addEventListener('click', addButtonClick);

function addButtonClick() {
	var $task = document.querySelector('#task');
	var title = $task.value;
	var $toDoList = document.querySelector('#todos');
	var id = app.items.length;
	
	var newItem = new Item(id, title, false);
	
	var $label = document.createElement('label');
	var $input = document.createElement('input');
	var $li = document.createElement('li');
	
	$label.setAttribute ('for', newItem.id);
	$label.textContent = newItem.title;
	
	$input.id = newItem.id;
	$input.type = 'checkbox';
		
	app.items.push(newItem);
	
	$li.appendChild($input);
	$li.appendChild($label);
		
	$toDoList.appendChild($li);
	
	$input.addEventListener('change', function (event) {
			if ($input.checked) {
				$label.style.textDecoration='line-through';
				
			}
			
    });
}


//var elems = document.querySelectorAll('label');



