import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  allTodos: {},
  isLoading: false,
  error: null,
}

export const __getTodos = createAsyncThunk(
  "todos/get",
  // async ({ todoYear, todoMonth }, thunkAPI) => {
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get(`/todo`)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const __addTodo = createAsyncThunk(
  "todos/add",
  async (tagId, thunkAPI) => {
    try {
      await baseURL.post(`/api/todo/${tagId}`)
      return thunkAPI.fulfillWithValue(console.log("success"))
    } catch (err) {
      return thunkAPI.rejectWithValue(console.log(err))
    }
  }
)

export const todosSlice = createSlice({
  name: "allTodos",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      baseURL.get(`/data`)
      state.allTodos = state
    },
    addTodo: (state, { todoYear, todoMonth }) => {
      baseURL.post(`/todos/${todoYear.payload}/${todoMonth.payload}`)
      // state.allTodos = action.payload
    },
    delTodo: (state, action) => {
      baseURL.delete(`/todos/${action.payload}`)
      state.allTodos = state.allTodos.filter((v) => v.id !== action.payload)
    },
    updateTodo: (state, action) => {
      baseURL.patch(`/todos/${action.payload}`)
      state.allTodos = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.allTodos = action.payload
      })
      .addCase(__getTodos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(__addTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.allTodos = action.payload
      })
      .addCase(__addTodo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { addTodo, delTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer
