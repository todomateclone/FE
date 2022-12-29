import React from "react"
import styled from "styled-components"
import Header from "../../shared/layout/Header"
import Todolist from "./todolist/Todolist"
import TodoCalendar from "./calendar/TodoCalendar"
import SubMenuModal from "../subMenu/SubMenuModal"
import BtmMenuModal from "../bottomMenu/BtmMenuModal"

const Main = () => {
  return (
    <>
      <Header />
      <StMainWrapper>
        <StLeftWrap>
          <StSocial></StSocial>
          <StCalendar>
            <TodoCalendar />
          </StCalendar>
        </StLeftWrap>
        <StRightWrap>
          <StFeed>
            <h3>FEED</h3>
          </StFeed>
          <Todolist />
        </StRightWrap>
        <SubMenuModal />
        <BtmMenuModal />
      </StMainWrapper>
    </>
  )
}

export default Main

const StLeftWrap = styled.div`
  display: grid;
  max-width: 42.5rem;
  grid-template-columns: 100%;
  grid-auto-rows: 4rem auto;
  grid-template-areas:
    "social"
    "calendar";
  gap: 2rem;
  padding: 2rem 1rem 3rem 2rem;
  overflow: hidden;
  grid-area: leftSide;
`

const StRightWrap = styled.div`
  display: grid;
  width: 100%;
  /* grid-template-columns: 22rem; */
  grid-auto-rows: 5rem auto;
  grid-template-areas: "feed";
  gap: 1rem;
  padding: 2rem 3rem 1rem 2rem;
  overflow: hidden;
  h3 {
    font-size: xx-large;
    font-weight: 700;
  }
  grid-area: rightSide;
`

const StMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 42.5rem) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
      "leftSide"
      "rightSide";
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
