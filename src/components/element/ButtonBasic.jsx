import React from "react"
import styled from "styled-components"

const ButtonBasic = (props) => {
  const {
    type,
    className,
    hidden,
    onClick,
    width,
    height,
    margin,
    padding,
    borderRadius,
    color,
    children,
  } = props

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    borderRadius: borderRadius,
    color: color,
  }

  return (
    <ElButtonBasic
      {...styles}
      type={type}
      className={className}
      hidden={hidden}
      onClick={onClick}
    >
      {children}
    </ElButtonBasic>
  )
}

ButtonBasic.defaultProps = {
  type: "button",
  className: "",
  hidden: false,
  onClick: () => {},
  width: "100%",
  height: "",
  margin: "",
  padding: "10px",
  borderRadius: "",
  children: null,
  color: "",
}

export default ButtonBasic

const ElButtonBasic = styled.button`
  cursor: pointer;
`
