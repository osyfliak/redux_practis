import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { reducerAuth } from "./auth/auth-slice";
import {todoReducer} from './todo/todo-reducer'

const rootReducer = combineReducers({
        auth: reducerAuth,
        todo: todoReducer,
})

export const store = configureStore({ reducer: rootReducer });


