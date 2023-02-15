import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-reducer";
import { combineReducers } from "redux";
import {todoReducer} from './todo/todo-reducer'

const rootReducer = combineReducers({
        auth: authReducer,
        todo: todoReducer,
})

export const store = configureStore({ reducer: rootReducer });


