import React from "react"
import styled from "styled-components"

const Input = ({
  value,
  onChange,
  placeholder,
  autoFocus,
  width,
  color,
  height,
  fontSize,
  fontWeight,
  name,
  type,
  borderBottom,
  maxLength,
  hidden,
  maxWidth,
}) => {
  return (
    <StInput
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      autoFocus={autoFocus}
      onChange={onChange}
      width={width}
      color={color}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderBottom={borderBottom}
      maxLength={maxLength}
      hidden={hidden}
      maxWidth={maxWidth}
    ></StInput>
  )
}

Input.defaultProps = { onChange: () => {} }

const StInput = styled.input`
  border: none;
  border-bottom: 0.08rem solid ${(props) => props.color};
  outline: none;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height || "2rem"};
  font-size: ${({ fontSize }) => fontSize};
  padding-bottom: 0.3rem;

  ::placeholder {
    color: ${({ color }) => color || "#c1bebe"};
    font-weight: ${({ fontWeight }) => fontWeight};
  }

  :focus {
    border-bottom: ${({ borderBottom }) => borderBottom};
  }
`
export default Input
