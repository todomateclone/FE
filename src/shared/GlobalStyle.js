import { createGlobalStyle } from "styled-components"
import "normalize.css"
import "../styles/font.css"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: "Pretendard-Regular";
  }
`

export default GlobalStyle
