import React, { useRef } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { sendSetBtmModalStatus } from "../../redux/modules/modalSlice"
import CustomButton from "../login/CustomButton"
import {
  goalFulldisclosureIcon,
  goalHideIcon,
  goalPartialdisclosureIcon,
  goalSeeOnlyIcon,
} from "../../styles/assets"

const SetBtmModal = () => {
  const modalStatus = useSelector((state) => state.openModal.openSetBottomModal)
  const dispatch = useDispatch()
  const modalRef = useRef(HTMLDivElement)

  const closeModalClickHandler = () => {
    dispatch(sendSetBtmModalStatus(!modalStatus))
  }

  return (
    <>
      <StBtmWrap hidden={!modalStatus} toggle={modalStatus}></StBtmWrap>
      <StBtmMenu ref={modalRef} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          <StContainer>
            <div>
              <p>공개설정</p>
            </div>
            <StSetContainer>
              <StCheckWraper>
                <div>
                  <StImg src={goalHideIcon} />
                  <span>숨기기</span>
                </div>
                <StCheckBox>
                  <StInput type="checkbox" id="hide" />
                  <StLabel htmlFor="hide" />
                </StCheckBox>
              </StCheckWraper>
              <StCheckWraper>
                <div>
                  <StImg src={goalSeeOnlyIcon} />
                  <span>나만보기</span>
                </div>
                <StCheckBox>
                  <StInput type="checkbox" id="me" />
                  <StLabel htmlFor="me" />
                </StCheckBox>
              </StCheckWraper>
              <StCheckWraper>
                <div>
                  <StImg src={goalPartialdisclosureIcon} />
                  <span>일부공개</span>
                </div>
                <StCheckBox>
                  <StInput type="checkbox" id="some" />
                  <StLabel htmlFor="some" />
                </StCheckBox>
              </StCheckWraper>
              <StCheckWraper>
                <div>
                  <StImg src={goalFulldisclosureIcon} />
                  <span>전체공개</span>
                </div>
                <StCheckBox>
                  <StInput type="checkbox" id="all" />
                  <StLabel htmlFor="all" />
                </StCheckBox>
              </StCheckWraper>
            </StSetContainer>

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

export default SetBtmModal

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
  height: ${(props) => (props.toggle ? "30rem" : "0rem")};
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
const StSetContainer = styled.div`
  width: 33rem;
  height: 16rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`
const StCheckWraper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.15rem solid #f0efef;
`
const StImg = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 0.5rem;
`
const StInput = styled.input`
  visibility: hidden;
`
const StLabel = styled.label`
  background-color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 1.7rem;

  width: 1.7rem;
  ::after {
    border: 0.15rem solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 0.42rem;
    left: 1.3rem;
    opacity: 0;
    position: absolute;
    top: 0.5rem;
    transform: rotate(-45deg);
    width: 0.8rem;
  }
`
const StCheckBox = styled.div`
  position: relative;
  input[type="checkbox"]:checked + label {
    background-color: #4884c8;
    border-color: #4884c8;
  }
  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`
