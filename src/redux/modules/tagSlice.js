import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  tags: [],
  isLoading: false,
  error: null,
}

export const __getTags = createAsyncThunk(
  "tag/get",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get(`/mypage/tag`)
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
      const { data } = await baseURL.post(`/mypage/tag`, payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __deleteTag = createAsyncThunk(
  "tag/delete",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.delete(`mypage/tag/${payload}`)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __patchTag = createAsyncThunk(
  "tag/patch",
  async (payload, thunkAPI) => {
    console.log(payload, payload.tagId)
    const { tagId, newTag } = payload
    try {
      const { data } = await baseURL.patch(`mypage/tag/${tagId}`, newTag)
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getTags.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getTags.fulfilled, (state, action) => {
        state.isLoading = false

        state.tags = action.payload.data
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

        state.tags = [...state.tags, action.payload.data]
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

        state.tags = state?.tags.filter((tag) => tag.tagId !== action.payload)
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
        console.log(action.payload.data.tagId)
        state.tags = state.tags.map((tag) => {
          if (tag.tagId === action.payload.data.tagId) {
            return {
              ...tag,
              tagName: action.payload.data.tagName,
              tagColor: action.payload.data.tagColor,
            }
          }
        })
      })
      .addCase(__patchTag.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {} = tagSlice.actions
export default tagSlice.reducer
