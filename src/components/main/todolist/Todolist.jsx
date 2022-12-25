import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import TagBtn from "../../element/TagBtn"
import { __getTodos } from "../../../redux/modules/todosSlice"
import Checkbox from "../../element/Checkbox"
import { pendingIcon, plusIcon } from "../../../styles/assets"

const Todolist = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState({})
  const { allTodos, isLoading, error } = useSelector((state) => state.allTodos)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
  }, [dispatch])

  if (isLoading) return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <div>
      {allTodos.tags?.map((tag) => {
        const todo = allTodos.todos?.filter((item) => item.tagId === tag.tagId)
        return (
          // 태그
          <StTodolist key={"StTodolist" + tag.tagId}>
            <StTagTitle
              key={"StTagTitle" + tag.tagId}
              // style={{ color: tag.tagColor }}
              onClick={() => {
                console.log(tag.tagName)
              }}
            >
              {tag.tagName}
            </StTagTitle>
            {todo.map((val, idx) => (
              <StFrag key={"frag" + val.todoId + idx}>
                {/* 할 일 부분*/}
                <StListBody key={"StListBody" + val.todoId}>
                  <Checkbox /> {val.content}
                </StListBody>
                <StTodoIcon src={plusIcon} alt="" />
              </StFrag>
            ))}
          </StTodolist>
        )
      })}
    </div>
  )
}

export default Todolist

const StTodolist = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 3rem 1fr;
  grid-area: todolist;
  column-gap: 1em;
`
const StFrag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem;
`

const StTagTitle = styled(TagBtn)`
  padding-bottom: 0.5rem;
`

const StListBody = styled.div`
  display: flex;
  align-items: center;
`

const StTodoIcon = styled.img`
  width: 1rem;
  height: 1rem;
`
