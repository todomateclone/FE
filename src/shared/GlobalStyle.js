import { createGlobalStyle } from "styled-components"
import "normalize.css"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: "Pretendard-Regular", "Roboto", sans-serif;
  }

  @font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
  color: '#191919';

}

/* body {
  font-family: "Pretendard-Regular";
  font-weight: 400;
}
 */
`

export default GlobalStyle
