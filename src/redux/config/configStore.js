import { configureStore } from "@reduxjs/toolkit"
import allTodos from "../modules/todosSlice"
import profile from "../modules/profileSlice"
import tag from "../modules/tagSlice"
import todoDate from "../modules/dateSlice"

const store = configureStore({
  reducer: { allTodos, profile, tag, todoDate },
})

export default store
