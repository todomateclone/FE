import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import CustomButton from "../element/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getProfile,
  __patchProfile,
  __putProfileImg,
} from "../../redux/modules/profileSlice"

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profileImgInput = useRef()

  useEffect(() => {
    dispatch(__getProfile())
  }, [dispatch])

  const data = useSelector((state) => state.profile) // 비동기
  const profile = data.profile

  const [newProfile, setNewProfile] = useState({
    nickname: "",
    description: "",
  })

  const changeInputHandler = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    if (newProfile.nickname === "" || newProfile.description === "")
      navigate("/main")
    else {
      dispatch(__patchProfile(newProfile))
      navigate("/main")
    }
  }
  const profileImgClickHandler = (e) => {
    e.preventDefault()
    profileImgInput.current.click()
  }

  const setDefaultClickHandler = (e) => {
    e.target.value = null
  }

  const changeImgHandler = (e) => {
    const formData = new FormData()
    formData.append("multipartFile", e.target.files[0])
    dispatch(__putProfileImg(formData))
  }

  return (
    profile && (
      <StInputContainer>
        <StLoginHead>
          <StLink to="/main" style={{ color: "black" }}>
            <SlArrowLeft size="20"></SlArrowLeft>
          </StLink>
          <div style={{ marginRight: "3rem" }}>
            <CustomButton
              name="완료"
              fontSize="1.45rem"
              fontWeight="500"
              backGroundColor="transparent"
              onClick={submitHandler}
            ></CustomButton>
          </div>
        </StLoginHead>
        <StTitle>프로필</StTitle>
        <StImg
          onClick={profileImgClickHandler}
          src={profile.profileImageUrl}
        ></StImg>
        <input
          style={{ marginBottom: "2rem", display: "none" }}
          ref={profileImgInput}
          type="file"
          name="file"
          accept="image/*"
          onChange={changeImgHandler}
          onClick={setDefaultClickHandler}
        ></input>
        <StInputForm>
          <div>
            <label>이름</label>
            <StInput
              name="nickname"
              defaultValue={
                newProfile.nickname === ""
                  ? profile.nickname
                  : newProfile.nickname
              }
              onChange={changeInputHandler}
              placeholder="이름 입력"
              autoFocus
            />
          </div>
          <div>
            <label>자기소개</label>
            <StInput
              name="description"
              defaultValue={
                newProfile.description === ""
                  ? profile.description
                  : newProfile.description
              }
              onChange={changeInputHandler}
              placeholder="자기소개 입력(최대 50글자)"
              maxLength="50"
            ></StInput>
          </div>
        </StInputForm>
      </StInputContainer>
    )
  )
}

export default Profile

const StInputContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  margin: 0 2rem;
  font-size: 1.35rem;
  font-weight: 600;
  width: 100%;
`

const StLoginHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const StTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 4rem;
  padding-top: 0rem;
`

const StImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 4rem;
  border: 0.08rem solid #7c7b7b;
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const StInputForm = styled.div`
  width: 100%;
  div {
    ${({ theme }) => theme.common.flexCenter}
    flex-direction: row;
    margin-bottom: 1.5rem;
  }
  label {
    font-size: 1.3rem;
    width: 5rem;
    margin-right: 1.1rem;
  }
`
const StInput = styled.input`
  width: 80%;
  height: 2.5rem;
  max-width: 70rem;
  border: none;
  outline: none;
  padding-bottom: 0.3rem;

  border-bottom: 0.2rem solid #e4e2e2;
  :focus {
    border-bottom: 0.2rem solid #7c7b7b;
    ::placeholder {
      color: "#c1bebe";
    }
    font-size: 1.5rem;
  }
`
