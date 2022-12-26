import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import ButtonBasic from "./ButtonBasic"

// 사용 보류!
const TagBtn = (props) => {
  const { type, className, hidden, onClick, color, backgroundColor, children } =
    props

  const styles = { color: color, backgroundColor: backgroundColor }
  return (
    <ElTagBtn {...styles} onClick={onClick}>
      {children}
    </ElTagBtn>
  )
}

export default TagBtn

const ElTagBtn = styled.button`
  border: none;
  border-radius: 0.3em;
  height: 2.5rem;
  width: fit-content;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.baseColor.btnGray};
  font-weight: 700;
  color: ${(props) => props.color};
`
