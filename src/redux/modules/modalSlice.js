import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  openModal: false,
  openBottomModal: false,
  openColorBottomModal: false,
  openSetBottomModal: false,
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
    sendColorBtmModalStatus: (state, action) => {
      state.openColorBottomModal = action.payload
    },
    sendSetBtmModalStatus: (state, action) => {
      state.openSetBottomModal = action.payload
    },
  },
})

export const {
  openModal,
  sendModalStatus,
  openBottomModal,
  sendBtmModalStatus,
  sendColorBtmModalStatus,
  sendSetBtmModalStatus,
} = modalSlice.actions
export default modalSlice.reducer
