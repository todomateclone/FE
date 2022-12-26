// 령빈님이랑 상의 해서 button ele로 빼기
import React from "react"
import styled from "styled-components"

const CustomButton = ({
  width,
  name,
  height,
  color,
  fontSize,
  fontWeight,
  backGroundColor,
  onClick,
}) => {
  return (
    <StButton
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backGroundColor={backGroundColor}
      onClick={onClick}
    >
      {name}
    </StButton>
  )
}

export default CustomButton

const StButton = styled.button`
  border-radius: 0.4rem;
  border: none;
  width: ${({ width }) => width};
  background-color: ${({ backGroundColor }) => backGroundColor};
  color: ${({ color }) => color};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
`
