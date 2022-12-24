import React from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <StInputForm>
      <StLoginHead>
        <StLink to="/" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>가입하기</div>
      </StLoginHead>
      <StInput placeholder="이메일"></StInput>
      <StInput placeholder="비밀번호"></StInput>
      <StLink to="/profile">
        <CustomButton
          name="확인"
          width="62rem"
          height="3rem"
          color="#c9c7c7"
          fontSize="1.1rem"
        ></CustomButton>
      </StLink>
    </StInputForm>
  )
}

export default SignUp
const StLoginHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  div {
    margin: auto;
  }
`

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  div {
    margin-bottom: 2rem;
  }
`
const StInput = styled.input`
  border: none;
  border-bottom: 0.15rem solid #e4e2e2;
  outline: none;
  ::placeholder {
    color: #d8d5d5;
    font-weight: 400;
  }
  width: 62rem;
  height: 2rem;
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
  :focus {
    border-bottom: 0.15rem solid #898787;
  }
`
const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
