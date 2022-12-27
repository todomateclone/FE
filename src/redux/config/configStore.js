import { configureStore } from "@reduxjs/toolkit"
import allTodos from "../modules/todosSlice"
import profile from "../modules/profileSlice"
import tag from "../modules/tagSlice"

const store = configureStore({
  reducer: { allTodos: allTodos, profile, tag },
})

export default store
