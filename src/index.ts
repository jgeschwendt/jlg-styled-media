import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';

type Breakpoint = keyof DefaultTheme['breakpoints'];

const media = {
  breakpoint: {
    down(breakpoint: Breakpoint, breakpointCss: FlattenSimpleInterpolation) {
      return css`
        @media (max-width: ${(breakpoint as number) - 0.02}px) {
          ${breakpointCss}
        }
      `;
    },
    up(breakpoint: Breakpoint, breakpointCss: FlattenSimpleInterpolation) {
      console.log('-', breakpoint, breakpointCss);
      return css`
        @media (min-width: ${props => props.theme.breakpoints[breakpoint]}px) {
          ${breakpointCss}
        }
      `;
    },
  },
  print(printCss: FlattenSimpleInterpolation) {
    return css`
      @media print {
        ${printCss}
      }
    `;
  }
}

export default media;
