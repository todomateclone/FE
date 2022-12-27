import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  tags: [
    {
      tagId: "1",
      tagName: "일반",
      tagColor: "black",
    },
  ],
  isLoading: false,
  error: null,
}

export const __getTags = createAsyncThunk(
  "tag/get",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get(`/mypage/tag`)
      console.log(data)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __addTag = createAsyncThunk(
  "tag/add",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await baseURL.add(`/mypage/tag`, payload)
      // console.log(data)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __deleteTag = createAsyncThunk(
  "tag/delete",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await baseURL.delete(`mypage/tag/${payload}`)
      console.log(data)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __patchTag = createAsyncThunk(
  "tag/patch",
  async (payload, thunkAPI) => {
    const { tagId, editTag } = payload
    try {
      const { data } = await baseURL.patch(`mypage/tag/${tagId}`, editTag)
      console.log(data)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTag: (state, action) => {
      console.log(action.payload)
      state.profile = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getTags.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getTags.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(__getTags.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(__addTag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__addTag.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        // state.tags
      })
      .addCase(__addTag.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(__deleteTag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__deleteTag.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        // state.tags
      })
      .addCase(__deleteTag.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(__patchTag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__patchTag.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        // state.tags
      })
      .addCase(__patchTag.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { addTag } = tagSlice.actions
export default tagSlice.reducer
