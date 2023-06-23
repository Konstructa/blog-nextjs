import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { MyTheme } from '@/styles/MyTheme';

const titleSize = {
  small: (theme: MyTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: MyTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: MyTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: MyTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: MyTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    ${titleSize[size ?? 'huge'](theme)};
    ${titleCase(uppercase ?? false)};
  `}
`;
