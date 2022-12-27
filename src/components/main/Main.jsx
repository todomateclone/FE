import React from "react"
import styled from "styled-components"
import Header from "../../shared/layout/Header"
import Todolist from "./todolist/Todolist"
import TodoCalendar from "./calendar/TodoCalendar"
import SubMenuModal from "../subMenu/SubMenuModal"

const Main = () => {
  return (
    <>
      <Header />
      <StMainWrapper>
        <StSocial></StSocial>
        <StFeed>
          <h3>FEED</h3>
        </StFeed>
        <StCalendar>
          <TodoCalendar />
        </StCalendar>
        <Todolist />
      </StMainWrapper>
      <SubMenuModal />
    </>
  )
}

export default Main

const StMainWrapper = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-auto-rows: 4rem 1fr;
  grid-template-areas:
    "social feed"
    "calendar todolist";
  gap: 2em;
  padding: 2rem 3rem 2rem;
  overflow-x: hidden;
  h3 {
    font-size: xx-large;
    font-weight: 700;
  }

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
    overflow-x: hidden;
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
