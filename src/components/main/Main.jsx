import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { mainApis } from "../../core/api/mainApi"
import Header from "../../shared/layout/Header"
import TagBtn from "../element/TagBtn"

const Main = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {}, [])
  return (
    <>
      <Header />
      <StMainWrapper>
        <StSocial>
          <h3>소셜</h3>
        </StSocial>
        <StFeed>
          <h3>FEED</h3>
        </StFeed>
        <StCalendar>
          <h3>달력 부분</h3>
        </StCalendar>
        <StTodolist>
          {/* <h3>투두리스트 부분</h3> */}
          <StTagTitle>테스트</StTagTitle>
          <StListBody>본문부</StListBody>
          <span>아이콘</span>
        </StTodolist>
      </StMainWrapper>
    </>
  )
}

export default Main

const StMainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem 1fr;
  grid-template-areas:
    "social feed"
    "calendar todolist";
  gap: 2em;
  padding: 2rem 4rem 2rem;

  @media screen and (max-width: 42.5rem) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-areas:
      "social"
      "calendar"
      "feed"
      "todolist";
    gap: 2em;
    padding: 1.25rem;
  }
`

const StSocial = styled.div`
  grid-area: social;
`

const StFeed = styled.div`
  grid-area: feed;
`

const StCalendar = styled.div`
  grid-area: calendar;
`

const StTodolist = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-auto-rows: 2rem 1fr;
  grid-area: todolist;
  grid-template-areas:
    "tagTitle ."
    "listbody .";
  column-gap: 1em;

  border: 1px solid #000;
`
const StTagTitle = styled(TagBtn)`
  grid-area: tagTitle;
`

const StListBody = styled.div`
  grid-area: listbody;
`
