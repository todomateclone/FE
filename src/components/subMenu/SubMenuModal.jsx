import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendModalStatus } from "../../redux/modules/modalSlice"
import { __getTags } from "../../redux/modules/tagSlice"
import TagBtn from "../element/TagBtn"
import { settingIcon, goalRightArrow } from "../../styles/assets"

const SubMenuModal = (/* setModalOpen */) => {
  /*   const closeModal = () => {
    setModalOpen(false)
  } */
  const dispatch = useDispatch()
  const modalStatus = useSelector((state) => state.openModal.openModal)
  const tags = useSelector((state) => state.tag.tags)
  const modalRef = useRef(HTMLDivElement)
  const navigate = useNavigate()

  // 잠시 보류
  useEffect(() => {
    dispatch(__getTags())
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // setModalOpen(false)
        // setOpen(!open)
      }
    }

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler) // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler) // 모바일 대응
    }
  }, [dispatch])
  return (
    <>
      <StSubWrap hidden={!modalStatus} toggle={modalStatus}></StSubWrap>
      <StSubMenu ref={modalRef} toggle={modalStatus}>
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
            <img src="" alt="프로필" />
            <div>
              <span>닉네임</span>
              <span>소개말</span>
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
              <TagBtn key={tag.tagId}>{tag.tagName}</TagBtn>
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
  transition: ${(props) =>
    props.toggle ? "all 3s ease-in" : "all 3s ease-in"};
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
  }
`
const ElProfile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    margin-right: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
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
    img {
      width: calc(1.625rem / 3);
      height: calc(2.75rem / 3);
    }
  }
`
