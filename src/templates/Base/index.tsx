import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { ContentContainer, FooterContainer, HeaderContainer, Wrapper } from './styles';


export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};


export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />

      <HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </HeaderContainer>

      <ContentContainer>{children}</ContentContainer>

      <FooterContainer>
        <Footer footerHtml={settings.text}/>
      </FooterContainer>

      <GoTop />
    </Wrapper>
  )
}
