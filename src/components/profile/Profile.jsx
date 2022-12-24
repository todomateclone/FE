import React from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <StInputContainer>
      <StLoginHead>
        <StLink to="/" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>프로필</div>
        <StLink to="/main">
          <CustomButton
            name="확인"
            height="3rem"
            width="3rem"
            color="#c9c7c7"
            fontSize="1.1rem"
            backGroundColor="transparent"
          ></CustomButton>
        </StLink>
      </StLoginHead>
      <StInputForm>
        <div>
          <label>이름</label>
          <StInput placeholder="이름 입력"></StInput>
        </div>
        <div>
          <label>자기소개</label>
          <StInput
            placeholder="자기소개 입력(최대 50글자)"
            maxLength="50"
          ></StInput>
        </div>
      </StInputForm>
    </StInputContainer>
  )
}

export default Profile
const StLoginHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  div {
  }
`

const StInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
`

const StInputForm = styled.div`
  input {
    width: 62rem;
    border-bottom: 0.15rem solid #e4e2e2;
    :focus {
      border-bottom: 0.15rem solid #898787;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  label {
    width: 5rem;
    height: 1.5rem;
  }
`

const StInput = styled.input`
  border: none;
  outline: none;
  ::placeholder {
    color: #d8d5d5;
    font-weight: 400;
  }
  height: 2rem;
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: "3rem";
`
