import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (menuVisible: boolean) => css`
  left: ${menuVisible ? '0' : '-30rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};
`;

const buttonChanger = (menuVisible: boolean) => css`
  ${({ theme }) => css`
    left: ${menuVisible ? '26rem' : '1rem'};
    color: ${menuVisible ? theme.colors.secondary : theme.colors.white};
    @media ${theme.media.lteMedium} {
      left: ${menuVisible ? '26rem' : '-0.5rem'};
    }
  `}
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacings.large};
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  max-width: 32rem;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out;
  overflow-y: auto;

  ${({ menuVisible }) => css`
    ${wrapperChanger(menuVisible)}
  `};
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
`;

export const Logo = styled.div`
  ${HeadingStyles} {
    display: flex;
    justify-content: center;
    margin: 0;
    margin-bottom: ${(props) => props.theme.spacings.xxlarge};
    img {
      border: 0.5rem solid ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  transition: all 300ms ease-in-out;
  position: fixed;
  top: ${(props) => props.theme.spacings.medium};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  z-index: 2;
  width: 3rem;
  height: 3rem;
  left: 26rem;

  ${({ menuVisible }) =>
    css`
      ${buttonChanger(menuVisible)}
    `}
`;
