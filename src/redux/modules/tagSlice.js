import { createAsyncThunk, createSlice, TaskAbortError } from "@reduxjs/toolkit"
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
      console.log(data)
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
    const { tagId, newTag } = payload
    try {
      const { data } = await baseURL.patch(`mypage/tag/${tagId}`, newTag)
      return thunkAPI.fulfillWithValue(data.data)
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
    builder.addCase(__getTags.fulfilled, (state, action) => {
      const tagList = action.payload.data
      state.tags = tagList
    })

    builder.addCase(__addTag.fulfilled, (state, action) => {
      state.isLoading = false
      state.tags = [...state.tags, action.payload.data]
    })

    builder.addCase(__deleteTag.fulfilled, (state, action) => {
      state.isLoading = false

      state.tags = state?.tags.filter((tag) => tag.tagId !== action.payload)
    })

    builder.addCase(__patchTag.fulfilled, (state, action) => {
      state.isLoading = false
      const { tags } = state
      const temp = [...tags]
      state.tags = temp?.map((tag) => {
        if (tag?.tagId === action.payload?.tagId) {
          return {
            ...tag,
            tagName: action.payload.tagName,
            tagColor: action.payload.tagColor,
          }
        }
        return { ...tag }
      })
    })
  },
})

export const {} = tagSlice.actions
export default tagSlice.reducer
