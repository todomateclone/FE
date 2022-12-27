import React from "react"
import styled from "styled-components"

const Checkbox = (props) => {
  const { color, _onChange, checked, readOnly } = props
  return (
    <ElCheckInput
      type="checkbox"
      // onClick={props.onClick}
      onChange={_onChange}
      checked={checked}
      readOnly={readOnly}
      color={color}
    />
  )
}

export default Checkbox

Checkbox.defaultProps = {
  onChange: () => {},
  checked: false,
  color: "",
}

const ElCheckInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => (props.checked ? `${props.color}` : "#dadddf")};
  appearance: none;
`
