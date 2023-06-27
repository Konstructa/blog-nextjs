import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${(props) => props.theme.font.sizes.small};
  color: ${(props) => props.theme.colors.darkerGray};
  font-style: italic;

  .categories span::after {
    content: ', ';
  }

  .categories span:last-child::after {
    content: '';
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    transition: all 300ms ease-in-out;
    &:hover {
      filter: brightness(50%);
    }
  }
`;
