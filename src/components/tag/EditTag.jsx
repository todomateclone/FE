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
  // const { tagId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tag = useLocation()?.state?.tag // link로 클릭한 값 넘기기
  console.log(tag)
  // console.log(tagName, tagColor)
  // const tags = useSelector((state) => state.tag.tags)
  // console.log(tags)
  // console.log(tagId)
  const [newTag, setNewTag] = useState({
    tagName: "",
  })

  // console.log(newTag.tagName)
  const changeInputHandler = (e) => {
    setNewTag({ tagName: e.target.value })
  }

  const clickTagEditHandler = (tagId) => {
    if (tag.tagName.trim() === "") {
      alert("태그를 입력해주세요!")
      return
    } else {
      dispatch(__patchTag({ newTag, tagId }))
      navigate(-1)
    }
  }

  const submitAddHandler = () => {
    if (!newTag.tagName) {
      return alert("태그를 입력해주세요!")
    } else {
      return (
        dispatch(__addTag(newTag)),
        alert("태그가 추가되었습니다!"),
        navigate(-1)
      )
    }
  }

  const clickTagDelHandler = (tagId) => {
    console.log(tagId)
    if (!window.confirm("태그를 삭제 하시겠습니까?")) {
      return
    } else {
      dispatch(__deleteTag(tagId))
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
        <div>
          <Input
            placeholder={tag?.tagName ?? "목표 입력"} // undefined 거나 null 이면 목표입력이 나오도록
            borderBottom="0.2rem solid #040404;"
            autoFocus="autoFocus"
            width="70rem"
            value={newTag.tagName}
            onChange={changeInputHandler}
          ></Input>

          <StSetColor>
            <p>공개설정</p>
            <p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </p>
          </StSetColor>
          <StSetColor>
            <p>색상</p>
            <p>
              <RiArrowDropDownFill></RiArrowDropDownFill>
            </p>
          </StSetColor>
          {tag && (
            <StBtnBox>
              <CustomButton
                name="수정하기"
                width="34.5rem"
                height="3.5rem"
                onClick={() => clickTagEditHandler(tag.tagId)}
              ></CustomButton>
              <CustomButton
                name="삭제"
                width="34.5rem"
                color="red"
                onClick={() => clickTagDelHandler(tag.tagId)}
              ></CustomButton>
            </StBtnBox>
          )}
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
  /* margin-left: 1rem; */
  /* margin: 0 1rem 0 1rem; */
  div {
    margin-right: 1.5rem;
  }
`
const StSetColor = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;

  border-bottom: 0.15rem solid #e4e2e2;
  p {
    height: 1.5rem;
    font-weight: 300;
    font-size: 1.2rem;
  }
`
const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 1.3rem;
`
