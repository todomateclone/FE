import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  openModal: false,
  isLoading: false,
  error: null,
}

const modalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    sendModalStatus: (state, action) => {
      state.openModal = action.payload
    },
  },
})

export const { openModal, sendModalStatus } = modalSlice.actions
export default modalSlice.reducer
