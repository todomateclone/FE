import React, { useState } from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import Input from "../element/Input"
import { instance } from "../../core/api/axios"

const SignUp = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })
  const [emailError, setEmailError] = useState(false)
  const [pwdError, setPwdError] = useState(false)

  const changeEmailInputHandler = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    if (!e.target.value || emailRegex.test(e.target.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const changePwdInputHandler = (e) => {
    const emailRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    if (!e.target.value || emailRegex.test(e.target.value)) setPwdError(false)
    else setPwdError(true)
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    if (!emailError && !pwdError) {
      try {
        const { headers, data } = await instance.post(`/auth/signup`, userInfo)
        console.log("회원가입 성공", data)
        if (data.code === 200) {
          return (
            localStorage.setItem("authorization", headers.authorization),
            navigate("/profile")
          )
        } else {
          alert(data.msg)
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
          <SlArrowLeft size="20" style={{ marginLeft: "1.5rem" }}></SlArrowLeft>
        </StLink>
        <div>가입하기</div>
      </StLoginHead>
      <Input
        name="email"
        value={userInfo.email}
        placeholder="이메일"
        width="80%"
        maxWidth="70rem"
        autoFocus="autoFocus"
        borderBottom="0.2rem solid #7c7b7b;"
        fontSize="1.5rem"
        onChange={changeEmailInputHandler}
      ></Input>
      {emailError && <span>올바른 이메일 형식으로 작성해주세요.</span>}
      <Input
        name="password"
        value={userInfo.password}
        type="password"
        placeholder="비밀번호"
        width="80%"
        maxWidth="70rem"
        borderBottom="0.2rem solid #7c7b7b;"
        onChange={changePwdInputHandler}
      ></Input>
      {pwdError && (
        <span>영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요.</span>
      )}

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

export default SignUp

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;
  font-size: 1.35rem;
  font-weight: 600;
  width: 100%;
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
