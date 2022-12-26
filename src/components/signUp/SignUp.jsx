import React, { useState } from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"
import Input from "../element/Input"

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })

  // const changeInputHandler =

  return (
    <StInputForm>
      <StLoginHead>
        <StLink to="/">
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>가입하기</div>
      </StLoginHead>
      <Input
        placeholder="이메일"
        width="70rem"
        autoFocus="autoFocus"
        borderBottom="0.2rem solid #7c7b7b;"
      ></Input>
      <Input
        placeholder="비밀번호"
        width="70rem"
        borderBottom="0.2rem solid #7c7b7b;"
      ></Input>
      <StLink to="/login">
        <CustomButton
          name="확인"
          width="70rem"
          height="3.7rem"
          color="#c9c7c7"
          fontSize="1.4rem"
          fontWeight="300"
        ></CustomButton>
      </StLink>
    </StInputForm>
  )
}

export default SignUp

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;
  font-size: 1.35rem;
  font-weight: 600;
  div {
    margin-bottom: 2rem;
  }
`

const StLoginHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  div {
    margin: auto;
  }
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
