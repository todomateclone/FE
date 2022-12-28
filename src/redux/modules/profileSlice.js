import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
}

export const __getProfile = createAsyncThunk(
  "profile/get",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get(`/member`)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __patchProfile = createAsyncThunk(
  "profile/patch",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.patch(`member`, payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __putProfileImg = createAsyncThunk(
  "profileImg/put",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.put(`/member/pimage`, payload)
      return thunkAPI.fulfillWithValue(data.data)
      // headers: {
      //   "Content-Type": "multipart/form-data", // 굳이 안해줘도 자동으로 됨 //
      // },
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = action.payload
      })
      .addCase(__getProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(__patchProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__patchProfile.fulfilled, (state, action) => {
        state.isLoading = false
        const newProfile = action.payload.data.data
        state.profile = newProfile
      })
      .addCase(__patchProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(__putProfileImg.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__putProfileImg.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = {
          ...state.profile,
          profileImageUrl: action.payload.data.profileImageUrl,
        }
      })
      .addCase(__putProfileImg.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {} = profileSlice.actions
export default profileSlice.reducer
