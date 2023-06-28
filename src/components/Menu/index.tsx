import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import { Logo, Nav, OpenClose, Wrapper } from './styles';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [ menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible(current => !current);
  }

  return (
    <>
      <OpenClose
        menuVisible = {menuVisible}
        href='#'
        aria-label='Open or close menu'
        title='Open or close menu'
        onClick={handleOpenCloseMenu}
        >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </OpenClose>

      <Wrapper menuVisible = {menuVisible} aria-hidden={!menuVisible}>
        <Nav>
          <Logo>
            <LogoLink link='/' text={blogName} srcImg={logo} />
          </Logo>

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Nav>
      </Wrapper>
    </>
  )
}


