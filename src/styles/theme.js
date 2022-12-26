import styled from "styled-components"

// 자주 쓰는 색

const baseColor = {
  headerGray: "#fafafa",
  btnGray: "#f5f5f5",
}

const red = {
  one: "#fa9b89",
  two: "#ff6dc2",
  three: "#ff2c9e",
  four: "#eb7480",
  five: "#f76976",
  six: "#cb2f49",
}

// input / textarea / select
const common = {
  /* inputs: `
  border: 1px solid ${red.deep};
  border-radius: 16px;
  :focus {
    outline: 2px solid ${red.deep};
  }
  `, */

  flexCenter: `
  display: flex;
  align-items: center;
  justify-content: center;
  `,
}

const theme = {
  red,
  baseColor,
  common,
}

export default theme
