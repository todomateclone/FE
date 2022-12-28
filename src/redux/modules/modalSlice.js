import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  openModal: false,
  openBottomModal: false,
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
    sendBtmModalStatus: (state, action) => {
      state.openBottomModal = action.payload
    },
  },
})

export const {
  openModal,
  sendModalStatus,
  openBottomModal,
  sendBtmModalStatus,
} = modalSlice.actions
export default modalSlice.reducer
