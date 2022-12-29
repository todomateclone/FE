import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Checkbox from "../../element/Checkbox"
import { pendingIcon } from "../../../styles/assets"
import { useDispatch, useSelector } from "react-redux"
import { sendBtmModalStatus } from "../../../redux/modules/modalSlice"
import {
  putTodo,
  sendModifying,
  sendTodoId,
  __getTodos,
  __putTodo,
} from "../../../redux/modules/todosSlice"
import { mainApis } from "../../../core/api/mainApi"
import useOutsideClick from "../../../hooks/useOutsideClick"

const TodoBody = ({ val, tag, id }) => {
  // 상태
  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState({
    content: "",
    todoYear: val.todoYear,
    todoMonth: val.todoMonth,
    todoDay: val.todoDay,
  })
  const [isDone, setIsDone] = useState(false)
  const [modifiedTodo, setModifiedTodo] = useState({})

  // 셀렉터
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)

  // 핸들러
  const handlePutTodo = (todoId) => {
    dispatch(__putTodo({ modifiedTodo, todoId }))
    // await mainApis.putTodo(todoId, modifiedTodo)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handlePutTodo(giveTodoId)
  }
  const handleCheck = () => {
    setChecked(!checked)
    handleCheckedItem()
  }

  // done을 put 할 수 있어야 함. 여기 하는 중
  const handleCheckedItem = () => {
    setIsDone(!isDone)
    // dispatch(__getTodos)
  }
  const handleClickOutside = () => {
    // dispatch(sendTodoId(null))
    dispatch(sendTodoId(giveTodoId))
  }
  const ref = useOutsideClick(handleClickOutside)

  const dispatch = useDispatch()
  useEffect(() => {}, [dispatch])
  return (
    <StFrag>
      <StListBody
        key={"StListBody" + val.todoId}
        id={id}
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}
      >
        <Checkbox
          _onChange={(e) => {
            handleCheck()
          }}
          checked={checked}
          // checked={val.done}
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
            ref={ref}
          />
        ) : (
          <span
            onClick={() => {
              dispatch(sendTodoId(val.todoId))
            }}
          >
            {val.content}
          </span>
        )}
        <StTodoIcon
          src={pendingIcon}
          alt=""
          onClick={(e) => {
            e.stopPropagation()
            dispatch(sendTodoId(val.todoId))
            dispatch(sendBtmModalStatus(!modalStatus))
          }}
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
  width: 98%;
  font-size: medium;
  outline: none;
  border: none;
  animation-name: underline;
  animation-duration: 0.5s;
  margin-left: 0.2rem;
  border-bottom: 0.09rem solid ${(tag) => tag.tagColor};
`
