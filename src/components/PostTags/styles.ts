import styled from 'styled-components';

export const Wrapper = styled.p`
  margin: ${(props) => props.theme.spacings.medium} 0;
  span {
    margin: 0 0 0 0.5rem;
  }
  span::before {
    content: ' ';
  }
  span::after {
    content: ', ';
  }
  span:last-child::after {
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
