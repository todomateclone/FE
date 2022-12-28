import { configureStore } from "@reduxjs/toolkit"
import allTodos from "../modules/todosSlice"
import profile from "../modules/profileSlice"
import tag from "../modules/tagSlice"
import todoDate from "../modules/dateSlice"
import openModal from "../modules/modalSlice"

const store = configureStore({
  reducer: { allTodos, profile, tag, todoDate, openModal },
})

export default store
