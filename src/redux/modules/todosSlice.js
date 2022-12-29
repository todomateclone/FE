import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"
// import { mainApis } from "../../core/api/mainApi"

const initialState = {
  allTodos: {},
  getTodoId: "",
  isModifying: null,
  isLoading: false,
  error: null,
}

export const __getTodos = createAsyncThunk(
  "todos/get",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get(`/todo`)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const __getMonthlyTodos = createAsyncThunk(
  "todos/getMonthly",
  async ({ todoYear, todoMonth }, thunkAPI) => {
    try {
      const data = await baseURL.get(`/todo/${todoYear}/${todoMonth}`)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const __addTodo = createAsyncThunk(
  "todos/add",
  async (payload, thunkAPI) => {
    const { tagId, addTodo } = payload
    try {
      const { data } = await baseURL.post(`/${tagId}/todo`, addTodo)
      return thunkAPI.fulfillWithValue(data)
    } catch (err) {
      return thunkAPI.rejectWithValue(console.log(err))
    }
  }
)

export const __delTodo = createAsyncThunk(
  "todos/del",
  async (todoId, thunkAPI) => {
    try {
      await baseURL.delete(`/todo/${todoId}`)
      return thunkAPI.fulfillWithValue(todoId)
    } catch (err) {
      return thunkAPI.rejectWithValue(console.log(err))
    }
  }
)

export const __putTodo = createAsyncThunk(
  "todos/put",
  async (payload, thunkAPI) => {
    const { todoId, modifiedTodo } = payload
    try {
      const { data } = await baseURL.put(`/todo/${todoId}`, modifiedTodo)
      return thunkAPI.fulfillWithValue(data.data)
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
      baseURL.get(`/todo`)
      state.allTodos = state
    },
    // addTodo: (state, { todoYear, todoMonth }) => {
    addTodo: (state, { tagId, content }) => {
      // baseURL.post(`/todos/${todoYear.payload}/${todoMonth.payload}`)
      baseURL.post(`/todo/${tagId}`, content)
      state.allTodos = state.payload
    },
    delTodo: (state, action) => {
      baseURL.delete(`/todo/${action.payload}`)
      state.allTodos = state.allTodos.filter((v) => v.todoId !== action.payload)
    },
    putTodo: (state, { todoId, content }) => {
      baseURL.patch(`/todo/${todoId}`, content)
      state.allTodos = state.payload
    },
    sendTodoId: (state, action) => {
      state.getTodoId = action.payload
    },
    sendModifying: (state, action) => {
      state.isModifying = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // 기본 조회
      .addCase(__getTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getTodos.fulfilled, (state, action) => {
        const todoList = action.payload
        state.isLoading = false
        state.allTodos = todoList
      })
      .addCase(__getTodos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // 월간 조회
      .addCase(__getMonthlyTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getMonthlyTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.allTodos = action.payload
      })
      .addCase(__getMonthlyTodos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // 등록
      .addCase(__addTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__addTodo.fulfilled, (state, action) => {
        const please = action.payload.data
        state.isLoading = false
        console.log(action)
        state.allTodos.allTodos.data.todos = {
          ...state.allTodos.allTodos.data.todos,
          please,
        }

        // state.allTodos = action.payload
      })
      .addCase(__addTodo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // 삭제
      .addCase(__delTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__delTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.allTodos.data.todos = state.allTodos.data.todos.filter(
          (item) => item.todoId !== action.payload
        )
      })
      .addCase(__delTodo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // 수정
      .addCase(__putTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__putTodo.fulfilled, (state, action) => {
        state.isLoading = false
        const { todos } = state.allTodos
        console.log(todos)
        const temp = [{ ...todos }]
        state.todos = temp?.map((todo) => {
          if (todo?.todoId === action.payload?.todoId) {
            return {
              ...todo,
              content: action.payload.content,
            }
          }
        })
        console.log(state)
        // console.log(action)
        // const {modTodo} = state
        // state.allTodos = action.payload
      })
      .addCase(__putTodo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  addTodo,
  delTodo,
  putTodo,
  sendTodoId,
  getTodoId,
  sendModifying,
  isModifying,
} = todosSlice.actions
export default todosSlice.reducer
