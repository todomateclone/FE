import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { __getTodos } from "../../../redux/modules/todosSlice"
import TodoTag from "./TodoTag"
import TodoBody from "./TodoBody"

const Todolist = () => {
  const [todos, setTodos] = useState({})
  const { allTodos, isLoading, error } = useSelector((state) => state.allTodos)

  const dispatch = useDispatch()
  // const fetchTodos = () => {
  //   setTodos(allTodos)
  // }
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
          <StTodolist key={"StTodolist" + tag.tagId}>
            <TodoTag tag={tag} key={"StTagTitle" + tag.tagId} />
            {todo.map((val) => (
              <TodoBody
                val={val}
                tag={tag}
                key={"frag" + val.todoId + Math.random()}
              />
            ))}
          </StTodolist>
        )
      })}
    </div>
  )
}

export default Todolist

const StTodolist = styled.div`
  /* 그리드를 깔면 배치는 깔끔한데 마진 패딩이 부자유스럽다. 1fr말고 마진 패딩 맘대로인 조절이 없을까? */
  /* display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr;
  grid-area: todolist;
  column-gap: 1em; */
`
