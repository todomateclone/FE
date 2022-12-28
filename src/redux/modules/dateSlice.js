import { createSlice } from "@reduxjs/toolkit"

const date = new Date()
const pickYear = date.getFullYear()
const pickMonth = date.getMonth()
const pickDate = date.getDate()

const initialState = {
  todoDate: { pickYear, pickMonth, pickDate },
  isLoading: false,
  error: null,
}

const dateSlice = createSlice({
  name: "todoDate",
  initialState,
  reducers: {
    sendDate: (state, action) => {
      state.todoDate = action.payload
    },
  },
})

export const { todoDate, sendDate } = dateSlice.actions
export default dateSlice.reducer
