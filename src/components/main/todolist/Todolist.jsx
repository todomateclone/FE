import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import TagBtn from "../../element/TagBtn"
import { __getTodos } from "../../../redux/modules/todosSlice"
import axios from "axios"
import { serverUrl } from "../../../core/api"
import Checkbox from "../../element/Checkbox"

const Todolist = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState({})
  const { allTodos, error, msg } = useSelector((state) => state.allTodos)
  const fetchTodos = () => {
    const { data } = axios.get(`${serverUrl}`)
    setTodos(data)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
    fetchTodos()
  }, [dispatch])
  return (
    <div>
      {allTodos.todos?.map((item) => {
        const tag = allTodos.tags?.find((tag) => tag.tagId === item.tagId)
        return (
          <StTodolist key={"StTodolist" + item.todoId}>
            <StTagTitle
              key={"StTagTitle" + item.todoId}
              style={{ color: tag.tagColor }}
            >
              {tag.tagName}
            </StTagTitle>
            <StListBody key={"StListBody" + item.todoId}>
              <Checkbox /> {item.content}
            </StListBody>
            <StTodoIcon key={"StTodoIcon" + item.todoId} src="#" />
          </StTodolist>
        )
      })}
    </div>
  )
}

export default Todolist

const StTodolist = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-auto-rows: 3rem 3rem;
  grid-area: todolist;
  grid-template-areas:
    "tagTitle ."
    "listbody todoIcon";
  column-gap: 1em;
  align-items: center;
`
const StTagTitle = styled(TagBtn)`
  grid-area: tagTitle;
`

const StListBody = styled.div`
  display: flex;
  align-items: center;
  grid-area: listbody;
`

const StTodoIcon = styled.img`
  grid-area: todoIcon;
`
