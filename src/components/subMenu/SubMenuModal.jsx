import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendModalStatus } from "../../redux/modules/modalSlice"
import { __getTags } from "../../redux/modules/tagSlice"
import { settingIcon, goalRightArrow } from "../../styles/assets"
import TagBtn from "../element/TagBtn"
import useOutsideClick from "../../hooks/useOutsideClick"
import { profile, __getProfile } from "../../redux/modules/profileSlice"

const SubMenuModal = () => {
  const profileData = useSelector((state) => state.profile)
  const profile = profileData.profile
  const modalStatus = useSelector((state) => state.openModal.openModal)
  const tags = useSelector((state) => state.tag.tags)
  const navigate = useNavigate()
  const handleOutsideClick = () => {
    dispatch(sendModalStatus(false))
  }
  const dispatch = useDispatch()
  const ref = useOutsideClick(handleOutsideClick)

  useEffect(() => {
    dispatch(__getTags())
    dispatch(__getProfile())
  }, [dispatch])
  return (
    <>
      <StSubWrap hidden={!modalStatus} toggle={modalStatus}></StSubWrap>
      <StSubMenu ref={ref} toggle={modalStatus}>
        <StInsideMenu toggle={modalStatus}>
          <ElTitle>
            <span
              onClick={() => {
                dispatch(sendModalStatus(!modalStatus))
              }}
            >
              X
            </span>
            <img
              src={settingIcon}
              alt=""
              onClick={() => {
                navigate("/login")
              }}
            />
          </ElTitle>

          <ElProfile>
            <img src={profile?.profileImageUrl} alt="" />
            <div>
              <span>{profile?.nickname}</span>
              <span>{profile?.description}</span>
            </div>
          </ElProfile>
          <hr />

          <ElTagBox>
            <h6>
              목표
              <img
                src={goalRightArrow}
                alt=""
                onClick={() => {
                  navigate("/tag")
                }}
              />
            </h6>
            {tags?.map((tag) => (
              <StTag key={tag.tagId}>{tag.tagName}</StTag>
            ))}
          </ElTagBox>
        </StInsideMenu>
      </StSubMenu>
    </>
  )
}

export default SubMenuModal

const StSubWrap = styled.div`
  position: absolute;
  background: #191919;
  top: 0%;
  left: 0%;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 4;
`

const StSubMenu = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  justify-content: flex-start;
  background: white;
  width: ${(props) => (props.toggle ? "17.5rem" : "0rem")};
  height: 100%;
  top: 0%;
  right: 0%;
  position: absolute;
  z-index: 5;
  transition: ${(props) => (props.toggle ? "all 1s" : "all 1s")};
  overflow-x: hidden;
`

const StInsideMenu = styled.div`
  display: ${(props) => (props.toggle ? "grid" : "none")};
  grid-template-columns: 1fr;
  grid-auto-rows: 3rem 3rem auto auto;
  row-gap: 0.5rem;
  padding: 1.2rem;
  hr {
    margin-block: 0.5rem;
    color: #818181;
  }
`
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

const ElTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  padding-bottom: 2rem;
  img {
    width: 1.5rem;
  }
`

const ElTagBox = styled.div`
  h6 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 700;
    img {
      width: calc(1.625rem / 3);
      height: calc(2.75rem / 3);
    }
  }
`
const StTag = styled.button`
  border: none;
  border-radius: 0.3em;
  height: 2.5rem;
  width: fit-content;
  margin-right: 0.5rem;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.baseColor.btnGray};
  font-weight: 700;
  color: ${(props) => props.color};
`
