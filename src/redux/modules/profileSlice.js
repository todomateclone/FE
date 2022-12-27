import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../core/api/axios"

const initialState = {
  profile: {
    nickname: "",
    description: "",
    profileImageUrl: "",
  },
  isLoading: false,
  error: null,
}

export const __getProfile = createAsyncThunk(
  "profile/get",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get(`/member`)
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
    console.log(payload)
    try {
      const { data } = await baseURL.patch(`member`, payload)
      console.log(data.data)
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
        console.log(action.payload)
        state.profile = {}
        // state.profile = {... state , action.payload}
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
        console.log(action.payload)
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
