import React from "react"
import styled from "styled-components"
import LoginButton from "./LoginButton"

const Login = () => {
  return (
    <StLoginContainer>
      <div>이미지 자리</div>
      <div>
        <div>
          <h1>Todo mate</h1>
          <h5>할 일을 작성,계획,관리하세요.</h5>
        </div>
      </div>
      <StBtnBox>
        <LoginButton width="5rem" name="로그인"></LoginButton>
        <LoginButton width="5rem" name="가입하기"></LoginButton>
      </StBtnBox>
    </StLoginContainer>
  )
}

export default Login

const StLoginContainer = styled.div`
  display: flex;
  height: 50rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
