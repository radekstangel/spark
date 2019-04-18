import { createGlobalStyle } from "styled-components";
// components
import { color, font, media } from "./theme";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  body {
    background: ${color.white};
    color: ${color.blackLight};
    font-family: ${font.family.base};
    font-size: 1rem;
    font-weight: ${font.weight.normal};
    line-height: ${font.lineHeight};
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;

    ${media.small} {
      font-size: ${18 / 16}rem;
    }

    ${media.medium} {
      font-size: ${20 / 16}rem;
    }

    ${media.large} {
      font-size: ${22 / 16}rem;
    }
  }

  /* sticky footer */
  #app > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* reset */
  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }

  /* vertical rhythm */
  p,
  ul,
  ol {
    margin-bottom: ${font.lineHeight}em;
  }

  /* headings */
  h1,
  h2,
  h3 {
    color: ${color.black};
    font-family: ${font.family.light};
    font-weight: ${font.weight.light};
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 3.157em;
  }
  h2 {
    font-size: 2.369em;
  }
  h3 {
    font-size: 1.777em;
  }

  /* link */
  a {
    color: ${color.primary};
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      color: ${color.primaryHover};
      outline-width: 0;
    }
  }

  /* lists */
  ul,
  ol {
    list-style-position: inside;
    margin-left: 1.5em;

    & & {
      margin-left: 1em;
      margin-bottom: 0;
    }
  }

  /* text */
  b,
  strong {
    font-weight: ${font.weight.bold};
  }
`;

export default GlobalStyles;
