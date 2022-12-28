import React, { useState } from "react"
import styled from "styled-components"
import { RiArrowDropDownFill } from "react-icons/ri"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import Input from "../element/Input"
import CustomButton from "../login/CustomButton"
import { useSelector, useDispatch } from "react-redux"
import { __addTag, __deleteTag, __patchTag } from "../../redux/modules/tagSlice"

const EditTag = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tag = useLocation()?.state?.tag // link로 클릭한 값 넘기기

  const [newTag, setNewTag] = useState({
    tagName: "",
    tagColor: "#FFFFFF",
  })

  const changeInputHandler = (e) => {
    setNewTag({ ...newTag, tagName: e.target.value })
  }

  const submitAddHandler = () => {
    if (!newTag.tagName && !newTag.tagColor) {
      return alert("태그를 입력해주세요!")
    } else {
      return (
        dispatch(__addTag(newTag)),
        alert("태그가 추가되었습니다!"),
        navigate(-1)
      )
    }
  }

  const clickTagEditHandler = (tagId) => {
    // if (tag.tagName.trim() === "") {
    //   alert("태그를 입력해주세요!")
    //   return
    // } else {
    dispatch(__patchTag({ newTag, tagId }))
    navigate(-1)
    // }
  }
  const clickTagDelHandler = (tagId) => {
    if (!window.confirm("태그를 삭제 하시겠습니까?")) {
      return
    } else {
      dispatch(__deleteTag(tagId))
      navigate(-1)
    }
  }

  return (
    <>
      <StLoginHead>
        <StLink to="/tag" style={{ color: "black" }}>
          <SlArrowLeft size="20" style={{ marginLeft: "2rem" }}></SlArrowLeft>
        </StLink>
        <div>목표</div>
        {!tag && (
          <CustomButton
            name="추가"
            width="4rem"
            height="3rem"
            backGroundColor="transparent"
            fontSize="1.5rem"
            onClick={submitAddHandler}
          ></CustomButton>
        )}
      </StLoginHead>
      <StTagBox>
        <StContainer>
          <StBox>
            <Input
              placeholder={tag?.tagName ?? "목표 입력"} // undefined 거나 null 이면 목표입력이 나오도록
              borderBottom="0.2rem solid #040404;"
              autoFocus="autoFocus"
              width="80%"
              height="3.0rem"
              fontSize="1.5rem"
              // maxWidth="70rem"
              value={newTag.tagName}
              onChange={changeInputHandler}
            ></Input>
            <StSetColor>
              <p>공개설정</p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </StSetColor>
            <StSetColor>
              <p>색상</p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </StSetColor>
          </StBox>
        </StContainer>
        {tag && (
          <StBtnBox>
            <CustomButton
              name="수정하기"
              width="30%"
              height="3.5rem"
              onClick={() => clickTagEditHandler(tag.tagId)}
            ></CustomButton>
            <CustomButton
              name="삭제"
              width="30%"
              color="red"
              height="3.5rem"
              onClick={() => clickTagDelHandler(tag.tagId)}
            ></CustomButton>
          </StBtnBox>
        )}
      </StTagBox>
    </>
  )
}

export default EditTag

const StLoginHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  div {
    margin: auto;
    font-size: 1.5rem;
  }
`
const StTagBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  flex-direction: column;

  margin-top: 3rem;
  div {
    width: 80%;
  }
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const StSetColor = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.15rem solid #e4e2e2;
  margin-top: 1.5rem;
  p {
    width: 80%;
    height: 1.5rem;
    font-weight: 300;
    font-size: 1.2rem;
  }
`
const StBtnBox = styled.div`
  flex-direction: row;
  ${({ theme }) => theme.common.flexCenter}
  gap: 3rem;
  margin-top: 2rem;
  font-size: 1.3rem;
`
const StContainer = styled.div`
  /* width: 100%; */
  ${({ theme }) => theme.common.flexCenter}
`
const StBox = styled.div`
  /* width: 90%; */
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
`
