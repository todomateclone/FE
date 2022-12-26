import React from "react"
import styled from "styled-components"
import { SlArrowLeft } from "react-icons/sl"
import { RxPlus } from "react-icons/rx"
import { Link } from "react-router-dom"

const Tags = () => {
  return (
    <StInputContainer>
      <StLoginHead>
        <StLink to="/" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>목표</div>
        <StLink to="/tag/1">
          <RxPlus size="25"></RxPlus>
        </StLink>
      </StLoginHead>

      <StTagBox>
        <div>
          <label>일반</label>
          <StTagLink to="/tag/1">
            <p>태그1asdads</p>
            <p>{">"}</p>
          </StTagLink>
          <hr />
        </div>
        <div>
          <StTagLink to="/tag/1">
            <p>태그2adfadfasdfadsf</p>
            <p>{">"}</p>
          </StTagLink>
          <hr />
        </div>
      </StTagBox>
    </StInputContainer>
  )
}

export default Tags

const StInputContainer = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
`

const StLoginHead = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;

  div {
    margin: auto;
    font-size: 1.4rem;
    font-weight: 700;
  }
`

const StTagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  label {
    font-size: 1.2rem;
    color: #d8d5d5;
  }
  p {
    display: flex;
    padding: 0.3rem 1rem 0.3rem 1rem;
    align-items: center;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #f1eeee;
  }

  hr {
    width: 72rem;
    background-color: #f4f2f2;
    margin: 0rem;
    height: 0.01rem;
    border: 0;
  }
`
const StTagLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  p {
    &:last-child {
      background-color: transparent;
      color: #d8d5d5;
    }
  }
`

const StLink = styled(Link)`
  color: black;
`
