import styled, { css, DefaultTheme } from 'styled-components';

export type PostContainerProps = {
  size: 'max' | 'content';
};

const postContainerStyles = {
  max: () => css`
    max-width: ${props => props.theme.sizes.max};
  `,
  content: () => css`
    max-width: ${props => props.theme.sizes.content};
  `,
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${postContainerStyles[size]}
  `}
`;
