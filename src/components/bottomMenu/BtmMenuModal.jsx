import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { sendBtmModalStatus } from "../../redux/modules/modalSlice"
import {
  sendModifying,
  __delTodo,
  __getTodos,
  __putTodo,
} from "../../redux/modules/todosSlice"

const BtmMenuModal = (/* setModalOpen */) => {
  /*   const closeModal = () => {
    setModalOpen(false)
  } */
  const [modifiedTodo, setModifiedTodo] = useState("")
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)
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
      <StBtmWrap hidden={!modalStatus} toggle={modalStatus}></StBtmWrap>
      <StBtmMenu ref={modalRef} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          <h3
            onClick={() => {
              // dispatch(__putTodo(giveTodoId, modifiedTodo))
              dispatch(sendBtmModalStatus(!modalStatus))
              dispatch(sendModifying(modalStatus))
              // dispatch(__getTodos())
            }}
          >
            수정 /
          </h3>
          <h3
            onClick={() => {
              dispatch(__delTodo(giveTodoId))
              dispatch(sendBtmModalStatus(!modalStatus))
              dispatch(__getTodos())
            }}
          >
            삭제 /
          </h3>
          <h3
            onClick={() => {
              dispatch(sendBtmModalStatus(!modalStatus))
            }}
          >
            닫기
          </h3>
        </StInsideMenu>
      </StBtmMenu>
    </>
  )
}

export default BtmMenuModal

const StBtmWrap = styled.div`
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

const StBtmMenu = styled.div`
  position: fixed;
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  ${({ theme }) => theme.common.flexCenter}
  background: white;
  max-width: 31.25rem;
  height: ${(props) => (props.toggle ? "23.75rem" : "0rem")};
  left: 0;
  right: 0;
  bottom: 0%;
  margin: 0 auto 0;
  border: 1px solid #000;
  border-radius: 1rem 1rem 0 0;
  z-index: 5;
  transition: ${(props) => (props.toggle ? "all 0.5s" : "all 0.5s")};
`

const StInsideMenu = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
`
