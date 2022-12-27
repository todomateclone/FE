import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendModalStatus } from "../../redux/modules/modalSlice"

const SubMenuModal = (/* setModalOpen */) => {
  /*   const closeModal = () => {
    setModalOpen(false)
  } */
  const modalStatus = useSelector((state) => state.openModal.openModal)
  const dispatch = useDispatch()
  const modalRef = useRef(HTMLDivElement)

  // 잠시 보류
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // setModalOpen(false)
        // setOpen(!open)
      }
    }

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler) // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler) // 모바일 대응
    }
  })

  return (
    <>
      <StSubWrap hidden={!modalStatus} toggle={modalStatus}></StSubWrap>
      <StSubMenu ref={modalRef} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          메뉴
          <br />
          <Link to="/login">로그인</Link>
          <h3
            onClick={() => {
              dispatch(sendModalStatus(!modalStatus))
            }}
          >
            닫기
          </h3>
        </StInsideMenu>
      </StSubMenu>
    </>
  )
}

export default SubMenuModal

const StSubWrap = styled.div`
  position: absolute;
  background: #191919;
  top: 0%;
  left: 0%;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: ${(props) =>
    props.toggle ? "all 3s ease-in" : "all 3s ease-in"};
  z-index: 4;
`

const StSubMenu = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  justify-content: flex-start;
  background: white;
  width: ${(props) => (props.toggle ? "17.5rem" : "0rem")};
  height: 100%;
  top: 0%;
  right: 0%;
  position: absolute;
  z-index: 5;
  transition: ${(props) => (props.toggle ? "all 1s" : "all 1s")};
  overflow-x: hidden;
`

const StInsideMenu = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
`
