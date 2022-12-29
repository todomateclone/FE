import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { sendModalStatus } from "../../redux/modules/modalSlice"
import { __getProfile } from "../../redux/modules/profileSlice"

const ProfileBox = () => {
  const profileData = useSelector((state) => state.profile)
  const profile = profileData.profile
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(__getProfile())
  }, [dispatch])

  return (
    <ElProfile
      onClick={() => {
        dispatch(sendModalStatus(false))
        navigate("/profile")
      }}
    >
      <img src={profile?.profileImageUrl} alt="" />
      <div>
        <span>{profile?.nickname}</span>
        <span>{profile?.description}</span>
      </div>
    </ElProfile>
  )
}

export default ProfileBox

const ElProfile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.baseColor.btnGray};
    border-radius: 1.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      font-weight: 700;
    }
    span + span {
      font-size: small;
      font-weight: 100;
      color: #818181;
    }
  }
`
