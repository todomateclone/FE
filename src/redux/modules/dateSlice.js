import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todoDate: new Date(),
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
