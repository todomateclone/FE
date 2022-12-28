import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "../../element/Checkbox"
import { pendingIcon } from "../../../styles/assets"
import { useDispatch, useSelector } from "react-redux"
import { sendBtmModalStatus } from "../../../redux/modules/modalSlice"
import { sendTodoId } from "../../../redux/modules/todosSlice"

const TodoBody = ({ val, tag }) => {
  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState({ ...val })
  const [isDone, setIsDone] = useState(false)
  const dispatch = useDispatch()
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)

  const handleCheck = () => {
    setChecked(!checked)
    // handleCheckedItem(tag.id, i, e.target.checked)
    handleCheckedItem()
  }
  /*   const handleCheckedItem = (id, idx, isCheck) => {
    setIsDone((prev) => {
      return { ...prev, [id]: { [idx]: isCheck } }
    })
  } */

  const handleCheckedItem = () => {
    setIsDone(!isDone)
    setTodo({ ...val, done: checked })
    console.log(todo.done)
    // 이거 post 해야됨
    // true일 경우 checked이도록 처리 필요
    // isDone에 patch 필요
    // 첫번째 true 전환에서 왜 undefined 나오지?
  }

  return (
    <StFrag>
      <StListBody key={"StListBody" + val.todoId}>
        <Checkbox
          _onChange={() => handleCheck()}
          checked={checked}
          color={tag.tagColor}
          key={tag.tagId}
        />
        <span
          onClick={() => {
            dispatch(sendBtmModalStatus(!modalStatus))
            dispatch(sendTodoId(todo.todoId))
            // console.log(todo)
            // console.log(giveTodoId)
          }}
        >
          {val.content}
        </span>
      </StListBody>
      <StTodoIcon src={pendingIcon} alt="" />
    </StFrag>
  )
}

export default TodoBody

const StFrag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0 1rem;
`

const StListBody = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 0.5rem;
  grid-auto-rows: 1fr;
  line-height: 1.5rem;
  cursor: pointer;
`

const StTodoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-top: 0.2rem;
`
