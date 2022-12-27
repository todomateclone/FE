import React, { useState } from "react"
import styled from "styled-components"
// import SubMenu from "../../components/subMenu/SubMenu"
import SubMenuModal from "../../components/subMenu/SubMenuModal"
import { mainSideMenuBtn } from "../../styles/assets"

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setModalOpen(true)
  }
  return (
    <>
      <StHeader>
        <BtnImg
          src={mainSideMenuBtn}
          alt=""
          onClick={() => {
            setOpen(!open)
          }}
        />
        {
          /* modalOpen &&  */
          <SubMenuModal
            setModalOpen={setModalOpen}
            open={open}
            setOpen={setOpen}
          />
        }
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
  overflow: hidden;
`

const BtnImg = styled.img`
  width: 1.4rem;
  margin-left: 1rem;
`
