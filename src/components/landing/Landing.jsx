import React from "react"
import styled from "styled-components"
import LoginButton from "../login/CustomButton"
import { Link } from "react-router-dom"
import { landingImg } from "../../styles/assets"
import Input from "../element/Input"

const Landing = () => {
  return (
    <StLoginContainer>
      <div>
        <StLandingImg alt="Todomate" src={landingImg}></StLandingImg>
      </div>
      <div>
        <h1>todo mate</h1>
        <p>할 일을 작성, 계획, 관리하세요.</p>
      </div>
      <StBtnBox>
        <StLink to={"/login"}>
          <LoginButton
            width="18rem"
            name="로그인"
            height="2.3rem"
          ></LoginButton>
        </StLink>
      </StBtnBox>
      <Link to={"/signup"} style={{ color: "black" }}>
        <LinkSignUp>가입하기</LinkSignUp>
      </Link>
      <Input
        placeholder="입력"
        fontSize="5rem"
        height="7rem"
        width="10rem"
        color="red"
        borderBottom="0.2rem solid #7c7b7b"
      ></Input>
      <Input placeholder="입력" autoFocus="autoFocus"></Input>
      <Input value="안녕"></Input>
    </StLoginContainer>
  )
}

export default Landing

const StLoginContainer = styled.div`
  display: flex;
  height: 50rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  h1 {
    font-weight: 900;
    font-size: 3rem;
    margin-bottom: 0rem;
  }
  p {
    margin-top: 0rem;
    color: #a2a1a1;
    font-size: 1.1rem;
  }
`
const StBtnBox = styled.div`
  margin-top: 2rem;
`
const StLink = styled(Link)`
  text-decoration: none;
`
const LinkSignUp = styled.div`
  display: inline;
  color: black;
  font-size: 0.9rem;
`
const StLandingImg = styled.img`
  margin-top: 25rem;
  width: 20rem;
  height: 20rem;
`
