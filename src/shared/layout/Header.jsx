import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { mainSideMenuBtn } from "../../styles/assets"
import { sendModalStatus } from "../../redux/modules/modalSlice"

const Header = () => {
  const modalStatus = useSelector((state) => state.openModal.openModal)
  // const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  /* const showModal = () => {
    setModalOpen(true)
  } */
  return (
    <>
      <StHeader>
        <BtnImg
          src={mainSideMenuBtn}
          alt=""
          onClick={() => {
            dispatch(sendModalStatus(!modalStatus))
          }}
        />
        {
          /* modalOpen &&  */
          // <SubMenuModal
          // setModalOpen={setModalOpen}
          /* /> */
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
