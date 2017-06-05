const reRender = (todoList, completedList) => {
	todoList.empty();
	completedList.empty ();
	state.todos.forEach(todo => {
		if (!todo.completed) {
			todoList.append(TodoItem(todo,_ => { reRender(todoList, completedList); })});
		} else {
			completedList.append(TodoItem(todo,_ => { reRender(todoList, completedList);}));
		}
	});
}