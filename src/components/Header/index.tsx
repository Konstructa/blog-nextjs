
import React from 'react'
import { Content, HeaderContainer } from './styles'
import { LogoLink } from '../LogoLink'
import { Heading } from '../Heading'

export type HeaderProps = {
  blogName: string
  blogDescription: string
  logo: string
  showText?: boolean
}

export const Header = ({ blogName, blogDescription, logo, showText = true }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoLink srcImg={logo} text={`${blogName} - ${blogDescription}`} link="/" />

      {showText &&
        <Content>
          <Heading size="small" as="h2" colorDark={true}>{blogName}</Heading>
          <p>{blogDescription}</p>
        </Content>
      }

    </HeaderContainer>
  )
}
