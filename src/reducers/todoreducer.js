//todoreducer.js
import { ADD_TODO, REMOVE_TODO } from '@/actions/todoaction';
const INITIAL_STATE = {
  todos: [],
};

const todoreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};

export default todoreducer;
