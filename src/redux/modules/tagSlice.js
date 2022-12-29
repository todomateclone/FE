import { createAsyncThunk, createSlice, TaskAbortError } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  tags: [
    {
      tagId: 999,
      tagName: "일반",
      tagColor: "#D3FF8B",
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
    const { tagId, newTag } = payload
    console.log(tagId, newTag)
    try {
      const { data } = await baseURL.patch(`mypage/tag/${tagId}`, newTag)
      console.log(data.data)
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
    builder
      .addCase(__getTags.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getTags.fulfilled, (state, action) => {
        const tagList = action.payload.data
        state.tags = tagList
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
      .addCase(__patchTag.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {} = tagSlice.actions
export default tagSlice.reducer
