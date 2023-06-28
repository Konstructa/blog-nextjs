import styled from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const ArticleContainer = styled.header`
  padding-bottom: ${(props) => props.theme.spacings.xlarge};
  margin-bottom: ${(props) => props.theme.spacings.xlarge};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.mediumGray};

  ${HeadingStyles} {
    margin: 0;
    margin-bottom: ${(props) => props.theme.spacings.medium};
  }
`;

export const Excerpt = styled.p`
  margin: ${(props) => props.theme.spacings.medium} 0;
  font-size: ${(props) => props.theme.font.sizes.medium};
`;

export const Cover = styled.img`
  max-width: 100%;
  display: block;
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;
