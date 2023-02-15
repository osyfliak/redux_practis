import { todoTypes } from "./todo-types";

export const todoActions ={addTodo: (todo)=>{return {type: todoTypes.add, payload: todo}}, removeTodo: (id)=>{return{type: todoTypes.remove, payload: id}}}