import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const SubMenuModal = ({ setModalOpen, open, setOpen }) => {
  /*   const closeModal = () => {
    setModalOpen(false)
  } */
  const modalRef = useRef(HTMLDivElement)

  // 잠시 보류
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false)
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
      <StSubWrap hidden={!open}></StSubWrap>
      <StSubMenu ref={modalRef} toggle={open}>
        <div>
          메뉴
          <br />
          <Link to="/login">로그인</Link>
          <h3 onClick={() => setOpen(false)}>닫기</h3>
        </div>
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
  /* transition: ${(props) => (props.hidden ? "" : "all 3s ease-in")}; */
  z-index: 4;
`

const StSubMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  background: white;
  width: 17.5rem;
  height: 100%;
  top: 0%;
  right: 0%;
  position: absolute;
  z-index: 5;
  transform: ${(props) =>
    props.toggle ? "translateX(0%)" : "translateX(100%)"};
  transition: ${(props) =>
    props.toggle ? "transform 0.4s ease-out" : "transform 0.4s ease-out"};
`
