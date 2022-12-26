import React, { useState } from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import styled from "styled-components"
import { mainSideMenuBtn } from "../../styles/assets"

const SubMenu = ({ name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <BtnImg src={mainSideMenuBtn} alt="" onClick={handleShow} />
      <StDiv show={show} onHide={handleClose} {...props} placement="end">
        <Offcanvas.Header closeButton>
          <StTitle>Offcanvas</StTitle>
        </Offcanvas.Header>
        <StBody>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </StBody>
      </StDiv>
    </>
  )
}

export default SubMenu

const BtnImg = styled.img`
  width: 1.4rem;
  margin-left: 1rem;
`

const StDiv = styled(Offcanvas)`
  .offcanvas.offcanvas-end {
    width: 100px;
  }
`

const StBody = styled(Offcanvas.Body)`
  /* width: 100px; */
`

const StTitle = styled(Offcanvas.Title)`
  color: red;
`
