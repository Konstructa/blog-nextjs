import styled, { css } from 'styled-components';
import { HeadingProps } from '.';


const titleSize = {
  small: () => css`
    font-size: ${props => props.theme.font.sizes.medium};
  `,
  medium: () => css`
    font-size: ${props => props.theme.font.sizes.large};
  `,
  big: () => css`
    font-size: ${props => props.theme.font.sizes.xlarge};
  `,
  huge: () => css`
    font-size: ${props => props.theme.font.sizes.xhuge};
    ${mediaFont()};
  `,
};

const mediaFont = () => css`
  @media ${props => props.theme.media.lteMedium} {
    font-size: ${props => props.theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    line-height: 1.2;
    ${titleSize[size ?? 'huge']()};
    ${titleCase(uppercase ?? false)};
  `}
`;
