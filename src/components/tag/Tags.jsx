import React, { useEffect } from "react"
import styled from "styled-components"
import { SlArrowLeft } from "react-icons/sl"
import { RxHeight, RxPlus } from "react-icons/rx"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { __getTags } from "../../redux/modules/tagSlice"

const Tags = () => {
  const dispatch = useDispatch()
  const tags = useSelector((state) => state.tag.tags)

  useEffect(() => {
    dispatch(__getTags())
  }, [dispatch])
  console.log(tags)
  // console.log(tags)

  return (
    <StInputContainer>
      <StLoginHead>
        <StLink to="/main" style={{ color: "black" }}>
          <SlArrowLeft size="20" style={{ marginLeft: "1.5rem" }}></SlArrowLeft>
        </StLink>
        <div>목표</div>
        <StLink to={`/tag/:tagId`}>
          <RxPlus size="25" style={{ marginRight: "1.5rem" }}></RxPlus>
        </StLink>
      </StLoginHead>
      <StTagBox>
        {/* <label>일반</label> */}
        {tags &&
          tags?.map((tag) => {
            return (
              <StTag key={tag?.tagId}>
                <div>
                  <StTagLink to={`/tag/${tag?.tagId}`} state={{ tag }}>
                    <p style={{ color: tag.tagColor }}>{tag.tagName}</p>
                    <p>{">"}</p>
                  </StTagLink>
                </div>
              </StTag>
            )
          })}
      </StTagBox>
    </StInputContainer>
  )
}

export default Tags

const StInputContainer = styled.div`
  font-size: 1.3rem;
`

const StLoginHead = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;

  div {
    margin: auto;
    font-size: 1.5rem;
  }
`

const StTag = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  div {
    width: 70%;
  }
`

const StTagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  label {
    font-size: 1.2rem;
    color: #d8d5d5;
    width: 80%;
    max-width: 70rem;
  }
  p {
    display: flex;
    padding: 0.3rem 1rem 0.3rem 1rem;
    align-items: center;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #f1eeee;
    max-width: 70rem;
  }

  hr {
    width: 80%;
    max-width: 70rem;
    background-color: #f4f2f2;
    margin: 0rem;
    height: 0.01rem;
    border: 0;
  }
`
const StTagLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.15rem solid #f0efef;
  margin-bottom: 1rem;
  p {
    &:last-child {
      background-color: transparent;
      color: #d8d5d5;
    }
    height: 2.8rem;
  }
`

const StLink = styled(Link)`
  color: black;
`
