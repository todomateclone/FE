import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "../../element/Checkbox"
import { pendingIcon } from "../../../styles/assets"

const TodoBody = ({ val, tag }) => {
  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState({ ...val })
  const [isDone, setIsDone] = useState()

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
    setTodo({ ...val, done: isDone })
    console.log(todo.done)
    // 이거 post 해야됨
    // true일 경우 checked이도록 처리 필요
    // 첫번째 true 전환에서 왜 undefined 나오지?
  }

  return (
    <StFrag>
      <StListBody key={"StListBody" + val.todoId}>
        <Checkbox
          // 여기 onChange에서 에러 뜸, i 어떻게 넣을지 생각
          // map 돌릴 거 아니므로 i 일단 제외
          _onChange={() => handleCheck()}
          checked={checked}
          color={tag.tagColor}
          key={tag.tagId}
        />
        {val.content}
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
