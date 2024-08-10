import { createContext, useReducer } from "react";

export const TodoList = createContext({
  todoList: [],
  addTodo: () => {},
  addInitialTodos: () => {},
  deleteTodo: () => {},
});

const postListReducer = (currTodoList, action) => {
  let newTodoList = currTodoList;
  if (action.type === "DELETE_TODO") {
    newTodoList = currTodoList.filter(
      (todo) => todo.id !== action.payload.postId
    );
  } else if (action.type === "ADD__INITIAL_TODOS") {
    newTodoList = action.payload.posts;
  } else if (action.type === "ADD_TODO") {
    newTodoList = [action.payload, ...currTodoList];
  }

  return newTodoList;
};

const TodoListProvider = ({ children }) => {
  const [todoList, dispatchTodoList] = useReducer(
    postListReducer,
    // DEFAULT_POST_LIST
    []
  );

  const addTodo = (userId, todoName, date) => {
    dispatchTodoList({
      type: "ADD_TODO",
      payload: {
        // id: Date.now(),
        todoName: todoName,
        date: date,
        owner: userId,
      },
    });
    // console.log(postImg);
  };

  const addInitialTodos = (posts) => {
    dispatchTodoList({
      type: "ADD__INITIAL_TODOS",
      payload: {
        posts,
      },
    });
    console.log(posts);
  };

  const deleteTodo = (postId) => {
    dispatchTodoList({
      type: "DELETE_TODO",
      payload: {
        postId,
      },
    });
  };

  return (
    <TodoList.Provider
      value={{ todoList, addTodo, deleteTodo, addInitialTodos }}
    >
      {children}
    </TodoList.Provider>
  );
};

export default TodoListProvider;
