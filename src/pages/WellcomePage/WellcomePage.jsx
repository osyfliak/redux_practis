import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/auth/auth-actions";
import { todoActions } from "../../redux/todo/todo-actions";

export const WellcomePage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todo;
  });

  const hanleLogout = () => {
    dispatch(authActions.logoutAction());
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { value } = e.target.elements[0];
    dispatch(todoActions.addTodo({ title: value, id: value }));
  };

  const hanleRemoveTodo = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <>
      <Button onClick={hanleLogout} variant="outline-primary">
        Primary
      </Button>
      <form onSubmit={handleAddTodo}>
        <input type="text" />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>
            <p>{title}</p>{" "}
            <button
              onClick={() => {
                hanleRemoveTodo(id);
              }}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
