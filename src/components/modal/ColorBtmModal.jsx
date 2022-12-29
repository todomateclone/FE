import React, { useRef } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { sendColorBtmModalStatus } from "../../redux/modules/modalSlice"
import CustomButton from "../element/CustomButton"

const ColorBtmModal = ({ tagColorClickHandler }) => {
  const modalStatus = useSelector(
    (state) => state.openModal.openColorBottomModal
  )
  const dispatch = useDispatch()
  const modalRef = useRef(HTMLDivElement)

  const closeModalClickHandler = () => {
    dispatch(sendColorBtmModalStatus(!modalStatus))
  }

  const tagColorList = [
    { key: 0, value: "#FF8B8B" },
    { key: 1, value: "#FFCA8B" },
    { key: 2, value: "#FFEC8B" },
    { key: 3, value: "#D3FF8B" },
    { key: 4, value: "#9BFF8B" },
    { key: 5, value: "#8BFFCE" },
    { key: 6, value: "#8BFFFF" },
    { key: 7, value: "#8BB2FF" },
    { key: 8, value: "#8B90FF" },
    { key: 9, value: "#D38BFF" },
    { key: 10, value: "#FD8BFF" },
    { key: 12, value: "#FF8BB5" },
    { key: 13, value: "#ef2c05" },
    { key: 14, value: "#eb8715" },
    { key: 15, value: "#e2d634" },
    { key: 16, value: "#3ce919" },
    { key: 17, value: "#1628ef" },
    { key: 18, value: "#2d03e7" },
    { key: 19, value: "#821ff3" },
    { key: 20, value: "#0b0b0b" },
    { key: 21, value: "#aea8a4" },
    { key: 22, value: "#57484d" },
    { key: 23, value: "#4d4c0a" },
    { key: 24, value: "#e45d8e" },
    { key: 25, value: "#35dc40" },
    { key: 26, value: "#f77535" },
    { key: 27, value: "#bfa3ef" },
    { key: 28, value: "#7888f2" },
    { key: 29, value: "#e048c7" },
    { key: 30, value: "#2c0707" },
  ]

  return (
    <>
      <StBtmWrap hidden={!modalStatus} toggle={modalStatus}></StBtmWrap>
      <StBtmMenu ref={modalRef} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          <StContainer>
            <div>
              <p>색상</p>
            </div>
            <StColorPalette>
              {tagColorList.map((val) => {
                return (
                  <div key={val.key}>
                    <StCircle
                      backGroundColor={val.value}
                      value={val.value}
                      onClick={tagColorClickHandler}
                    ></StCircle>
                  </div>
                )
              })}
            </StColorPalette>

            <CustomButton
              name="확인"
              onClick={closeModalClickHandler}
              marginTop="3rem"
              height="3.5rem"
              width="100%"
            />
          </StContainer>
        </StInsideMenu>
      </StBtmMenu>
    </>
  )
}

export default ColorBtmModal

const StBtmWrap = styled.div`
  position: absolute;
  background: #191919;
  top: 0%;
  left: 0%;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 4;
`

const StBtmMenu = styled.div`
  position: fixed;
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  ${({ theme }) => theme.common.flexCenter}
  background: white;
  max-width: 38rem;
  height: ${(props) => (props.toggle ? "40rem" : "0rem")};
  left: 0;
  right: 0;
  bottom: 0%;
  margin: 0 auto 0;
  border: 1px solid #ffffff;
  border-radius: 1rem 1rem 0 0;
  z-index: 5;
  transition: ${(props) => (props.toggle ? "all 0.5s" : "all 0.5s")};
`

const StInsideMenu = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
`
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.3rem;
    font-weight: 800;
    border-top: 0.31rem solid #c1bebe;
    padding-top: 1rem;
    border-radius: 0.25rem;
  }
`
const StColorPalette = styled.div`
  width: 33rem;
  height: 27rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`
const StCircle = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: none;
  :active {
    position: relative;
    top: 0.2rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.16),
      0 0.4rem 0.8rem rgba(0, 0, 0, 0.23);
  }

  background-color: ${({ backGroundColor }) => backGroundColor};
`
