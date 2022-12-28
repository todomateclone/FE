import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Checkbox from "../../element/Checkbox"
import { pendingIcon } from "../../../styles/assets"
import { useDispatch, useSelector } from "react-redux"
import { sendBtmModalStatus } from "../../../redux/modules/modalSlice"
import {
  sendModifying,
  sendTodoId,
  __putTodo,
} from "../../../redux/modules/todosSlice"
import { mainApis } from "../../../core/api/mainApi"

const TodoBody = ({ val, tag, id }) => {
  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState({
    content: "",
    todoYear: val.todoYear,
    todoMonth: val.todoMonth,
    todoDay: val.todoDay,
  })
  const [isDone, setIsDone] = useState(false)
  const [modifiedTodo, setModifiedTodo] = useState({})
  const dispatch = useDispatch()
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)
  const modifyingStatus = useSelector((state) => state.allTodos.isModifying)

  const handlePutTodo = async (todoId) => {
    await mainApis.putTodo(todoId, modifiedTodo)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    handlePutTodo(giveTodoId)
    // dispatch(__putTodo(giveTodoId, modifiedTodo))
    // setInputHidden(!inputHidden)
  }

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
    // 이거 post 해야됨
    // true일 경우 checked이도록 처리 필요
    // isDone에 patch 필요
    // 첫번째 true 전환에서 왜 undefined 나오지?
  }
  useEffect(() => {}, [dispatch])
  return (
    <StFrag>
      <StListBody
        key={"StListBody" + val.todoId}
        id={id}
        onSubmit={(e) => {
          handleSubmit(e)
          console.log("done")
        }}
      >
        <Checkbox
          _onChange={() => handleCheck()}
          checked={checked}
          color={tag.tagColor}
          key={tag.tagId}
        />
        {giveTodoId === val.todoId ? (
          <ElInput
            defaultValue={val.content}
            onChange={(e) => {
              setModifiedTodo({
                ...todo,
                content: e.target.value,
              })
            }}
          />
        ) : (
          <span
            onClick={() => {
              dispatch(sendBtmModalStatus(!modalStatus))
              dispatch(sendTodoId(val.todoId))
            }}
          >
            {val.content}
          </span>
        )}
        <StTodoIcon
          src={pendingIcon}
          alt=""
          onClick={() => dispatch(sendBtmModalStatus(!modalStatus))}
        />
      </StListBody>
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

const StListBody = styled.form`
  display: grid;
  grid-template-columns: 2rem 1fr 1rem;
  grid-auto-rows: 1fr;
  width: 100%;
  line-height: 1.5rem;
  cursor: pointer;
`

const StTodoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-top: 0.2rem;
`

const ElInput = styled.input`
  width: 100%;
  font-size: medium;
  outline: none;
  border: none;
  animation-name: underline;
  animation-duration: 0.5s;
  margin-left: 0.2rem;
  border-bottom: 0.09rem solid ${(tag) => tag.tagColor};
`
