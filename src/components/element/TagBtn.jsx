import React from "react"
import styled from "styled-components"
import ButtonBasic from "./ButtonBasic"

const TagBtn = (props) => {
  return <ElTagBtn>{props.children}</ElTagBtn>
}

export default TagBtn

const ElTagBtn = styled(ButtonBasic)`
  border: none;
  border-radius: 0.4em;
  height: 2.5rem;
  width: fit-content;
  padding: 0.6rem;
  background-color: #f5f5f5;
  font-weight: 700;
  color: ${({ theme }) => theme.red.six};
`
