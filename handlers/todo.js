const todo = {};
module.exports = todo;

const arrayOfTodo = [];
todo.renderAddPage = (request, h) => {
  return h.view('todo');
}

todo.add = (request, h) => {
  const { add } = request.payload;
  arrayOfTodo.push(add);
  return h.view('todo', { array: arrayOfTodo });
}

todo.renderEdit = (request, h) => h.view('edit', { array: arrayOfTodo, id: request.params.id_index });


todo.edit = (request, h) => {
  const { edit } = request.payload;
  const id = request.params.id_index;
  arrayOfTodo[id] = edit;
  return h.view('todo', { array:arrayOfTodo });
}

todo.delete = (request, h) => {
  const id = request.params.id_index;
  delete arrayOfTodo[id];
  arrayOfTodo.splice(id, 1);
  return h.view('todo', { array:arrayOfTodo });
}
