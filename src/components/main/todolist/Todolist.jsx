import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { __getTodos } from "../../../redux/modules/todosSlice"
import { __getTags } from "../../../redux/modules/tagSlice"
import TodoTag from "./TodoTag"
import TodoBody from "./TodoBody"

const Todolist = () => {
  const { allTodos, isLoading, error } = useSelector((state) => state.allTodos)
  const tags = useSelector((state) => state.tag.tags)
  const chosenDate = useSelector((state) => state.todoDate)
  const giveTodoId = useSelector((state) => state.allTodos.getTodoId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getTodos())
    dispatch(__getTags())
  }, [dispatch])

  if (isLoading) return <div>loading...</div>

  if (error) return <div>🌧{error.message}😢</div>

  if (chosenDate.todoDate !== "")
    return (
      <>
        {tags?.map((tag) => {
          const todo = allTodos.data?.todos?.filter(
            (item) =>
              item.tagId === tag.tagId &&
              item.todoYear === chosenDate.todoDate.pickYear &&
              item.todoMonth === chosenDate.todoDate.pickMonth &&
              item.todoDay === chosenDate.todoDate.pickDate
          )
          return (
            <StTodoWrap key={"stWrap" + tag.tagId}>
              <StTodolist key={`StTodolist${tag.tagId}`}>
                <TodoTag tag={tag} key={`StTagTitle${tag.tagId}`} />
                {todo?.map((val) => (
                  <TodoBody
                    val={val}
                    tag={tag}
                    key={"frag" + val.todoId + Math.random()}
                    id={val.todoId}
                  />
                ))}
              </StTodolist>
            </StTodoWrap>
          )
        })}
      </>
    )

  return (
    <>
      {tags?.map((tag) => {
        const todo = allTodos.data?.todos?.filter(
          (item) =>
            item.tagId === tag.tagId &&
            item.todoYear === new Date().getFullYear() &&
            item.todoMonth === new Date().getMonth() + 1 &&
            item.todoDay === new Date().getDate()
        )
        return (
          <StTodoWrap key={"stWrap" + tag.tagId}>
            <StTodolist key={`StTodolist${tag.tagId}`}>
              <TodoTag tag={tag} key={`StTagTitle${tag.tagId}`} />
              {todo?.map((val) => (
                <TodoBody
                  val={val}
                  tag={tag}
                  key={"frag" + val.todoId + Math.random()}
                  id={val.todoId}
                />
              ))}
            </StTodolist>
          </StTodoWrap>
        )
      })}
    </>
  )
}

export default Todolist

const StTodoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const StTodolist = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`
