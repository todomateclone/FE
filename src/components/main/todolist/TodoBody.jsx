import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "../../element/Checkbox"
import { pendingIcon, plusIcon } from "../../../styles/assets"

const TodoBody = ({ val, tag }) => {
  const [isDone, setIsDone] = useState(false)

  return (
    <StFrag>
      <StListBody key={"StListBody" + val.todoId}>
        <Checkbox
          onClick={() => {
            setIsDone(!isDone)
          }}
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
`

const StTodoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-top: 0.2rem;
`
