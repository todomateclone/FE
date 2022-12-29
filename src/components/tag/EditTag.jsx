import React, { useState } from "react"
import styled from "styled-components"
import { RiArrowDropDownFill } from "react-icons/ri"
import { SlArrowLeft } from "react-icons/sl"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Input from "../element/Input"
import CustomButton from "../element/CustomButton"
import { useSelector, useDispatch } from "react-redux"
import { __addTag, __deleteTag, __patchTag } from "../../redux/modules/tagSlice"
import {
  sendColorBtmModalStatus,
  sendSetBtmModalStatus,
} from "../../redux/modules/modalSlice"
import { goalSeeOnlyIcon } from "../../styles/assets"
import ColorBtmModal from "../modal/ColorBtmModal"
import SetBtmModal from "../modal/SetBtmModal"

const EditTag = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tag = useLocation()?.state?.tag
  const modalStatus = useSelector((state) => state.openModal.openBottomModal)
  const tagInfo = useSelector((state) => state.tag.tags)

  const initialTag = tagInfo.filter((val) => {
    return tag?.tagId === val?.tagId
  })

  const [newTag, setNewTag] = useState(initialTag[0])

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

  const tagColorClickHandler = (e) => {
    const colorValue = e.target.value
    setNewTag({ ...newTag, tagColor: colorValue })
  }

  const clickTagEditHandler = (tagId) => {
    if (!window.confirm("태그를 수정 하시겠습니까?")) {
      return
    } else {
      dispatch(__patchTag({ newTag, tagId }))
      navigate(-1)
    }
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
        <StBox>
          <Input
            placeholder={tag?.tagName ?? "목표 입력"}
            color={newTag?.tagColor}
            autoFocus="autoFocus"
            width="100%"
            height="3.0rem"
            fontSize="1.5rem"
            value={newTag?.tagName || ""}
            onChange={changeInputHandler}
          />
          <StSetColor>
            <p>공개설정</p>
            <div>
              <StImg
                src={goalSeeOnlyIcon}
                onClick={() => {
                  dispatch(sendSetBtmModalStatus(!modalStatus))
                }}
              />
              <p
                onClick={() => {
                  dispatch(sendSetBtmModalStatus(!modalStatus))
                }}
              >
                나만보기
              </p>
              <RiArrowDropDownFill
                size="30"
                onClick={() => {
                  dispatch(sendSetBtmModalStatus(!modalStatus))
                }}
              />
            </div>
          </StSetColor>
          <StSetColor>
            <p>색상</p>
            <div>
              <StCircle
                backGroundColor={newTag?.tagColor}
                onClick={() => {
                  dispatch(sendColorBtmModalStatus(!modalStatus))
                }}
              />
              <RiArrowDropDownFill
                onClick={() => {
                  dispatch(sendColorBtmModalStatus(!modalStatus))
                }}
                size="30"
              />
            </div>
          </StSetColor>
        </StBox>
        <ColorBtmModal tagColorClickHandler={tagColorClickHandler} />
        <SetBtmModal />
        {tag && (
          <StBtnBox>
            <CustomButton
              name="수정하기"
              width="43%"
              height="3.5rem"
              onClick={() => clickTagEditHandler(tag?.tagId)}
            ></CustomButton>
            <CustomButton
              name="삭제"
              width="43%"
              color="red"
              height="3.5rem"
              onClick={() => clickTagDelHandler(tag?.tagId)}
            ></CustomButton>
          </StBtnBox>
        )}
      </StTagBox>
    </>
  )
}

export default EditTag

const StLoginHead = styled.div`
  ${({ theme }) => theme.common.flexCenter}
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
  width: 100%;
`

const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const StImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`
const StSetColor = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.15rem solid #e4e2e2;
  margin-top: 1.5rem;
  p {
    font-weight: 300;
    font-size: 1.2rem;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`
const StBtnBox = styled.div`
  flex-direction: row;
  ${({ theme }) => theme.common.flexCenter}
  gap: 3rem;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.3rem;
`

const StBox = styled.div`
  width: 90%;
  flex-direction: column;
`
const StCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 3rem;
  background-color: ${({ backGroundColor }) => backGroundColor};
`
