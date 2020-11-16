export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    content,
    id: Math.random(),
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
