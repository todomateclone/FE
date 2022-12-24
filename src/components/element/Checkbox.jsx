import React from "react"
import styled from "styled-components"

const Checkbox = () => {
  return <ElCheckInput type="checkbox" />
}

export default Checkbox

const ElCheckInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  margin-right: 0.8rem;
  background: #dadddf;
  appearance: none;
  :checked {
    /* 클릭 시 태그 색깔에 따른 분기 처리 */
    background: red;
    border: none;
  }
`
