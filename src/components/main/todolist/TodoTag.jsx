import { useState } from "react"
import styled from "styled-components"
import { feedAddBtn } from "../../../styles/assets"
import Checkbox from "../../element/Checkbox"
import Input from "../../element/Input"

const TodoTag = ({ tag }) => {
  const [inputHidden, setInputHidden] = useState(true)

  return (
    <>
      <StTagTitle
        style={{ color: tag.tagColor }}
        onClick={() => {
          setInputHidden(!inputHidden)
        }}
      >
        <ElTagName>
          {tag.tagName} <img src={feedAddBtn} alt="" />{" "}
        </ElTagName>
      </StTagTitle>
      <ElTodoInputWrap hidden={inputHidden}>
        <Checkbox readOnly />
        <ElInput
          placeholder="입력"
          style={{ borderBottom: `0.09rem solid ${tag.tagColor}` }}
        />
      </ElTodoInputWrap>
    </>
  )
}

export default TodoTag

// 최소 컴포넌트에서 컬러값을 받지 못하는 문제로 임시 스타일링
const StTagTitle = styled.button`
  display: flex;
  border: none;
  border-radius: 0.3em;
  height: 2.5rem;
  width: fit-content;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.baseColor.btnGray};
  font-weight: 700;
  color: ${(props) => props.color};
  cursor: pointer;

  img {
    width: 1.2rem;
    margin-left: 0.2rem;
  }
`

const ElTagName = styled.span``

const ElTodoInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`

// const ElInput = styled(Input)`
const ElInput = styled.input`
  width: 100%;
  font-size: medium;
  outline: none;
  border: none;
  animation-name: example;
  animation-duration: 3s;

  @keyframes example {
    from {
      border-bottom: 0.09rem solid #c1bebe;
    }
    to {
      border-bottom: 0.09rem solid ${(tag) => tag.tagColor};
    }
  }
  /* transition: 5s ease-in-out; */
`
