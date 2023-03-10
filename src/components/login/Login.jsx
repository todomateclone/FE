import React, { useState } from "react"
import styled from "styled-components"
import CustomButton from "../element/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import { instance } from "../../core/api/axios"
import Input from "../element/Input"

const Login = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })

  const changeInputHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    if (userInfo.email && userInfo.password) {
      try {
        const { headers, data } = await instance.post(`/auth/login`, userInfo)
        if (data.code === 200) {
          return (
            localStorage.setItem("authorization", headers.authorization),
            navigate("/main")
          )
        }
      } catch (error) {
        alert(error.response.data.msg)
      }
    } else {
      alert("아이디, 비밀번호를 모두 입력해주세요!")
    }
  }

  return (
    <StInputForm>
      <StLoginHead>
        <StLink to="/">
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div>로그인</div>
      </StLoginHead>
      <Input
        placeholder="이메일"
        name="email"
        value={userInfo.email}
        type="text"
        autoFocus="autoFoucus"
        onChange={changeInputHandler}
        width="80%"
        maxWidth="70rem"
        borderBottom="0.2rem solid #7c7b7b;"
        fontSize="1.5rem"
      ></Input>

      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        value={userInfo.password}
        onChange={changeInputHandler}
        width="80%"
        maxWidth="70rem"
        borderBottom="0.2rem solid #7c7b7b;"
      />
      <CustomButton
        name="확인"
        width="80%"
        maxWidth="70rem"
        height="3.7rem"
        color="#c9c7c7"
        fontSize="1.4rem"
        fontWeight="300"
        onClick={submitHandler}
      ></CustomButton>
    </StInputForm>
  )
}

export default Login

const StInputForm = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  gap: 2rem;
  font-size: 1.35rem;
  font-weight: 600;
  div {
    margin-bottom: 2rem;
  }
`

const StLoginHead = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  div {
    margin: auto;
  }
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
