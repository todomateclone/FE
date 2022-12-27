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
      console.log("프로필 불러오기")
      console.log(data.data)
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

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    patchProfile: (state, action) => {
      console.log(action.payload)
      state.profile = action.payload
    },
  },
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
        // console.log(action.payload.data.data)
        const newProfile = action.payload.data.data
        state.profile = newProfile

        // state.profile
      })
      .addCase(__patchProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { patchProfile } = profileSlice.actions
export default profileSlice.reducer
