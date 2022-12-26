import React from "react"
import styled from "styled-components"
import SubMenu from "../../components/subMenu/SubMenu"

const Header = () => {
  return (
    <>
      <StHeader>
        <SubMenu />
      </StHeader>
    </>
  )
}

export default Header

const StHeader = styled.header`
  background-color: ${({ theme }) => theme.baseColor.headerGray};
  text-align: right;
  height: 5rem;
  padding: 2rem;
  border-bottom: 0.1rem solid #f1f1f1;
`
