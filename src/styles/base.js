// dependencies
import { injectGlobal } from 'styled-components';

// styles
import { color, font, media } from './theme';

const Base = injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *, :after, :before {
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
`;

export default Base;
