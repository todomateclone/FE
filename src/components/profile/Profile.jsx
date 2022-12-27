import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import CustomButton from "../login/CustomButton"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import Input from "../element/Input"
import { useDispatch, useSelector } from "react-redux"
import { __getProfile, __patchProfile } from "../../redux/modules/profileSlice"
import { patchProfile } from "../../redux/modules/profileSlice"
import { landingImg } from "../../styles/assets"

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(__getProfile())
  }, [dispatch]) // then

  const [isEditMode, setIsEditMode] = useState(false)

  const data = useSelector((state) => state.profile)
  // console.log(data.profile)

  const profile = data.profile

  const [newProfile, setNewProfile] = useState(profile)

  const changeInputHandler = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value })
    // console.log(newProfile)
  }

  const submitHandler = () => {
    if (!newProfile.nickname || !newProfile.description) {
      alert("프로필에 작성하지 않은 항목이 있습니다!")
    } else {
      return (
        setIsEditMode(!isEditMode),
        dispatch(__patchProfile(newProfile)),
        alert("프로필 작성완료!"),
        navigate("/")
      )
    }
  }

  return (
    <StInputContainer>
      <StLoginHead>
        <StLink to="/" style={{ color: "black" }}>
          <SlArrowLeft size="20"></SlArrowLeft>
        </StLink>
        <div> 프로필</div>
        <CustomButton
          name="완료"
          height="3.5rem"
          width="3.5rem"
          fontSize="1.45rem"
          fontWeight="500"
          backGroundColor="transparent"
          onClick={submitHandler}
        ></CustomButton>
      </StLoginHead>
      <StImage src={landingImg}></StImage>
      <lable>
        프로필 사진 업로드
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          name="profileImg"
          // onChange={changeImgHandler}
          // ref={fileInput}
        />
      </lable>

      <StInputForm>
        <div>
          <label>이름</label>
          <Input
            disable={!isEditMode}
            name="nickname"
            value={newProfile.nickname}
            onChange={changeInputHandler}
            placeholder="이름 입력"
            autoFocus
          ></Input>
        </div>
        <div>
          <label>자기소개</label>
          <Input
            disable={!isEditMode}
            name="description"
            value={newProfile.description}
            onChange={changeInputHandler}
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
const StImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid green;
`
