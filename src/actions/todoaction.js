//todoaction.js
export const ADD_TODO = 'ADD_TODO';

export const AddTodo = text => ({
  type: ADD_TODO,
  payload: { id: '', text },
});
