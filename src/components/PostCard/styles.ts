import styled from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${HeadingStyles} {
    margin: 0;
    margin-top: calc(${(props) => props.theme.spacings.small} - 0.6rem);
    margin-bottom: ${(props) => props.theme.spacings.small};
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: all 300ms ease-in-out;
  }
  &:hover a {
    color: ${(props) => props.theme.colors.secondary};
  }
  &:hover img {
    opacity: 0.8;
  }
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p``;
