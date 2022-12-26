import { useState } from "react"
import styled from "styled-components"
import { feedAddBtn } from "../../../styles/assets"
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
        {tag.tagName} <img src={feedAddBtn} alt="" />
      </StTagTitle>
      <ElInput hidden={inputHidden} placeholder="입력" />
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

const ElInput = styled(Input)`
  width: 100%;
  font-size: medium;
  color: red;
`
