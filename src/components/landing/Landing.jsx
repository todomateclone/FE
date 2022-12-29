import React from "react"
import styled from "styled-components"

import { Link } from "react-router-dom"
import { landingImg } from "../../styles/assets"
import CustomButton from "../element/CustomButton"

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
          <CustomButton
            width="18rem"
            name="로그인"
            height="3rem"
          ></CustomButton>
        </StLink>
      </StBtnBox>
      <Link to={"/signup"} style={{ color: "black" }}>
        <LinkSignUp>가입하기</LinkSignUp>
      </Link>
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
  margin-top: 18rem;
  width: 35rem;
  height: 27rem;
`
