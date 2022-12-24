// 령빈님이랑 상의 해서 button ele로 빼기
import React from "react"
import styled from "styled-components"

const LoginButton = ({ width, name }) => {
  return <StButton width={width}>{name}</StButton>
}

export default LoginButton

const StButton = styled.button`
  border-radius: 0.2rem;
  border: none;
  width: ${({ width }) => width};
  background-color: #e5e5e5;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`
