import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    addInitialTodo: (state, action) => {
      return action.payload.posts;
    },
    removeTodo: (state, action) => {
      return (state.todos = state.todos.filter(
        (todo) => todo.id != action.payload
      ));
    },
  },
});

export const { addTodo, addInitialTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
