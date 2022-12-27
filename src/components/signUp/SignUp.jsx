import React, { useState } from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import Input from "../element/Input"
import { instance } from "../../core/api/axios"
// 이메일 비밀번호 입력해서 post 요청 보내고 => email 입력했을 때 이메일 형식 확인 둘다 입력시 확인버튼 누르면 회원정보 수정 페이지로 (프로필)
// 이메일 동의 ? =>
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
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    if (!e.target.value || emailRegex.test(e.target.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    // console.log(emailRegex.test(e.target.value))
    // console.log(userInfo)
    console.log(emailError)
  }
  const changePwdInputHandler = (e) => {
    const emailRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    if (!e.target.value || emailRegex.test(e.target.value)) setPwdError(false)
    else setPwdError(true)
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    // console.log(pwdError)
  }

  const submitHandler = async (e) => {
    if (!emailError && !pwdError) {
      try {
        const { data } = await instance.post(`/auth/signup`, userInfo)
        // console.log(data)
        if (data.data.code === 200) {
          navigate("/login")
        } else {
          alert(data.data.msg)
        }
      } catch (error) {
        console.log(error)
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
      {/* <form>

      </form> */}
      <Input
        name="email"
        value={userInfo.email}
        placeholder="이메일"
        width="70rem"
        autoFocus="autoFocus"
        borderBottom="0.2rem solid #7c7b7b;"
        onChange={changeEmailInputHandler}
      ></Input>
      {emailError && <span>올바른 이메일 형식으로 작성해주세요.</span>}
      <Input
        name="password"
        value={userInfo.password}
        type="password"
        placeholder="비밀번호"
        width="70rem"
        borderBottom="0.2rem solid #7c7b7b;"
        onChange={changePwdInputHandler}
      ></Input>
      {pwdError && (
        <span>영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요.</span>
      )}

      <CustomButton
        name="확인"
        width="70rem"
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
