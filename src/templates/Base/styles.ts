import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderContainer = styled.div`
  margin-top: ${props => props.theme.spacings.xhuge};
`;

export const ContentContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacings.xhuge};
  padding-left: 2rem
`;

export const FooterContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacings.large};
`;
