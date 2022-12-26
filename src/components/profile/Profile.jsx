import React from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"
import Input from "../element/Input"

const Profile = () => {
  return (
    <StInputContainer>
      <StLoginHead>
        <StLink to="/" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div> 프로필</div>
        <StLink to="/main">
          <CustomButton
            name="확인"
            height="3.5rem"
            width="3.5rem"
            fontSize="1.45rem"
            fontWeight="500"
            backGroundColor="transparent"
          ></CustomButton>
        </StLink>
      </StLoginHead>
      <StInputForm>
        <div>
          <label>이름</label>
          <Input placeholder="이름 입력" autoFocus></Input>
        </div>
        <div>
          <label>자기소개</label>
          <Input
            placeholder="자기소개 입력(최대 50글자)"
            maxLength="50"
          ></Input>
        </div>
      </StInputForm>
    </StInputContainer>
  )
}

export default Profile

const StInputContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  gap: 1rem;
  font-size: 1.35rem;
  font-weight: 600;
`

const StLoginHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  div {
  }
`
const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const StInputForm = styled.div`
  input {
    width: 65rem;
    border-bottom: 0.2rem solid #e4e2e2;
    :focus {
      border-bottom: 0.2rem solid #7c7b7b;
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
    font-size: 1.3rem;
    width: 5rem;
    margin-right: 1.1rem;
  }
`
