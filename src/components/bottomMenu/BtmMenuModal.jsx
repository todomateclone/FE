import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { sendBtmModalStatus } from "../../redux/modules/modalSlice"
import {
  getTodoId,
  sendTodoId,
  sendModifying,
  __delTodo,
  __getTodos,
  __putTodo,
} from "../../redux/modules/todosSlice"
import {
  deleteIcon,
  editIcon,
  againAnotherdayIcon,
  againTomorrowIcon,
  anotherdayIcon,
  timeNotificationIcon,
} from "../../styles/assets"

const BtmMenuModal = (/* setModalOpen */) => {
  /*   const closeModal = () => {
    setModalOpen(false)
  } */
  const { allTodos } = useSelector((state) => state.allTodos)
  const [modifiedTodo, setModifiedTodo] = useState("")
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)
  const dispatch = useDispatch()
  const modalRef = useRef(HTMLDivElement)

  // 잠시 보류
  useEffect(() => {
    dispatch(__getTodos())
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
  }, [dispatch])

  return (
    <>
      <StBtmWrap hidden={!modalStatus} toggle={modalStatus}></StBtmWrap>
      <StBtmMenu ref={modalRef} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          <div
            onClick={() => {
              dispatch(sendBtmModalStatus(!modalStatus))
            }}
          >
            x
          </div>
          {/* 이것도 한 발 느림 */}
          {allTodos?.data?.todos?.map((item) =>
            item?.todoId === giveTodoId ? null : ( // <h6 key={"f" + item.todoId}>임시타이틀</h6>
              <h6 key={"t" + item.todoId}>{item.content}</h6>
            )
          )}
          <div>
            <ElBtnBox>
              <img
                src={editIcon}
                alt=""
                onClick={() => {
                  // dispatch(__putTodo(giveTodoId, modifiedTodo))
                  dispatch(sendBtmModalStatus(!modalStatus))
                  dispatch(sendModifying(modalStatus))
                  // dispatch(__getTodos())
                }}
              />
              수정하기
            </ElBtnBox>
            <ElBtnBox>
              <img
                src={deleteIcon}
                alt=""
                onClick={() => {
                  dispatch(__delTodo(giveTodoId))
                  dispatch(sendBtmModalStatus(!modalStatus))
                  dispatch(__getTodos())
                }}
              />
              삭제하기
            </ElBtnBox>
          </div>
          <span>
            <img src={timeNotificationIcon} alt="" />
            시간 알림
          </span>
          <span>
            <img src={againTomorrowIcon} alt="" />
            내일 또 하기
          </span>
          <span>
            <img src={againAnotherdayIcon} alt="" />
            다른 날 또 하기
          </span>
          <span>
            <img src={anotherdayIcon} alt="" />
            날짜 바꾸기
          </span>
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
  display: ${(props) => (props.toggle ? "grid" : "none")};
  grid-template-rows: repeat(6, auto);
  align-content: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding: 1.5rem;

  h6 {
    text-align: center;
    font-weight: 700;
  }
  div {
    display: flex;
    justify-content: center;
  }
  img {
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.8rem 0.8rem 0 0;
  }
  span {
    display: flex;
    align-items: flex-end;
  }
`
const ElBtnBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.baseColor.btnGray};
  border-radius: 0.5rem;
  margin: 0.2rem;
`
