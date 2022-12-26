import React from "react"
import styled from "styled-components"
import { RiArrowDropDownFill } from "react-icons/ri"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"

const EditTag = () => {
  return (
    <>
      <StLoginHead>
        <StLink to="/tag" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>목표</div>
        <StLink to="/tag">
          <div>확인</div>
        </StLink>
      </StLoginHead>
      <StTagBox>
        <div>
          <StInput placeholder="목표 입력"></StInput>
          <StSetColor>
            <p>공개설정</p>
            <p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </p>
          </StSetColor>
          <StSetColor>
            <p>색상</p>
            <p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </p>
          </StSetColor>
        </div>
      </StTagBox>
    </>
  )
}

export default EditTag

const StLoginHead = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  div {
    margin: auto;
    font-size: 1.5rem;
  }
`
const StTagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`
const StInput = styled.input`
  border: none;
  outline: none;
  width: 70rem;
  border-bottom: 0.2rem solid #040404;
  height: 2rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  ::placeholder {
    color: #d8d5d5;
    font-weight: 400;
    font-size: 1.4rem;
  }
`
const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const StSetColor = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;

  border-bottom: 0.15rem solid #e4e2e2;
  p {
    height: 1.5rem;
    font-weight: 300;
    font-size: 1.2rem;
  }
`
