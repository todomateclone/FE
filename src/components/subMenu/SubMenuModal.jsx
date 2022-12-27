import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const SubMenuModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false)
  }
  const modalRef = useRef(HTMLDivElement)

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false)
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
    <StSubMenu ref={modalRef}>
      메뉴
      <br />
      <Link to="/login">로그인</Link>
    </StSubMenu>
  )
}

export default SubMenuModal

const StSubMenu = styled.div`
  width: 17.5rem;
  height: 100vh;
  background: gray;
  position: absolute;
  top: 0%;
  right: 0%;
  transform: translateX(0);
  transition: transform 4s ease-in;
  z-index: 5;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
`
