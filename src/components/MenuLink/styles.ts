import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  margin-bottom: ${(props) => props.theme.spacings.small};
  font-size: 1.8rem;
  border-right: 0.5rem solid ${(props) => props.theme.colors.primary};
  transition: all 300ms ease-in-out;
  
  &:hover {
    border-right: 0.5rem solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;
