/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

// created new todoContext and also the using default value
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'Todo msg',
      completed: false,
    },
  ],
  addTodo: (id, todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// created new custome hook
export const useTodo = () => {
  return useContext(TodoContext);
};

// it is todoProvider
export const TodoProvider = TodoContext.Provider;
