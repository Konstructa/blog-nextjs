import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 20px;
  max-width: 120rem;
  margin: 0 auto;
  padding: ${props => props.theme.spacings.large};

  @media ${props => props.theme.media.lteSmall} {
    grid-template-columns: 1fr;
  }
`

export const NotFound = styled.p`
  padding: ${props => props.theme.spacings.large};
  text-align: center;
  font-size: ${props => props.theme.font.sizes.small};
`;
