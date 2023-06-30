import styled from "styled-components";
import { Title as HeadingStyles } from '../Heading/styles';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: ${props => props.theme.spacings.xhuge};
    width: 100%;
    max-width: ${props => props.theme.sizes.max};
    color: ${props => props.theme.colors.darkText};
    font-size: ${props => props.theme.font.sizes.small};
    margin: 0 auto;

    img {
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-flow: column wrap;
      margin-left: ${props => props.theme.spacings.large};
      max-width: 48rem;
    }

    div > p {
      margin: 0;
    }

    ${HeadingStyles} {
      margin: 0 0 calc(${props => props.theme.spacings.small} - 1rem);
    }

    @media ${props => props.theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      & > ${HeadingStyles} {
        margin: 0 0 ${props => props.theme.spacings.medium} 0;
      }
    }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: ${props => props.theme.spacings.large};
  max-width: 48rem;

  @media ${props => props.theme.media.lteSmall} {
    margin-left: 0;
  }
`;
