import React from "react"
import styled from "styled-components"

const Checkbox = (props) => {
  return (
    <ElCheckInput
      type="checkbox"
      onClick={props.onClick}
      checked={props.checked}
    />
  )
}

export default Checkbox

const ElCheckInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: #dadddf;
  appearance: none;
  :checked {
    /* 클릭 시 태그 색깔에 따른 분기 처리 */
    background: red;
    border: none;
  }
`
