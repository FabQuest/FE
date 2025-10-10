import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family: "SUITE", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;cursor:pointer;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter_24pt-Medium.ttf") format("truetype");
  font-weight: 500; /* Medium */
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter_24pt-Regular.ttf") format("truetype");
  font-weight: 400; /* Regular */
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter_24pt-SemiBold.ttf") format("truetype");
  font-weight: 600; /* SemiBold */
  font-style: normal;
}



@font-face {
  font-family: "RiaSans";
  src: url("/fonts/RiaSans-Bold.ttf") format("truetype");
  font-weight: 700; /* Bold */
  font-style: normal;
}

@font-face {
  font-family: "RiaSans";
  src: url("/fonts/RiaSans-Regular.ttf") format("truetype");
  font-weight: 400; /* Regular */
  font-style: normal;
}


// 초기 html 설정
html {
	background-color: #ffffff;	
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

}

body {
	width: 100%;
	max-width: 540px;
	overflow-x: hidden;
	background-color: #B9DCE3;
	font-family: "Inter", "Ria Sans";
}
`;

export default GlobalStyle;
