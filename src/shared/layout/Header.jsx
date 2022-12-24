import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <>
      <StHeader>아이콘 아이콘 아이콘</StHeader>
    </>
  )
}

export default Header

const StHeader = styled.header`
  background-color: ${({ theme }) => theme.baseColor.gray};
  text-align: right;
  height: 5rem;
  padding: 2rem;
`
