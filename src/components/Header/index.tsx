
import React from 'react'
import { HeaderContainer } from './styles'
import { LogoLink } from '../LogoLink'
import { Heading } from '../Heading'

export type HeaderProps = {
  blogName: string
  blogDescription: string
  logo: string
  showText?: boolean
}

export const Header = ({ blogName, blogDescription, logo, showText = false }: HeaderProps) => {
  return (
    <HeaderContainer>
       <LogoLink srcImg={logo} text={`${blogName} - ${blogDescription}`} link="/" />
      {showText &&
        <div>
          <Heading size="small" as="h2" colorDark={true}>{blogName}</Heading>
          <p>{blogDescription}</p>
        </div>
      }

    </HeaderContainer>
  )
}
