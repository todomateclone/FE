import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Header from "../../shared/layout/Header"
import { __getTodos } from "../../redux/modules/todosSlice"
import Todolist from "./todolist/Todolist"

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
  }, [dispatch])
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
        <Todolist />
      </StMainWrapper>
    </>
  )
}

export default Main

const StMainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 4rem 1fr;
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
