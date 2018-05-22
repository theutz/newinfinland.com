import styled from 'react-emotion'

export const Container = styled.div`
  ${props => props.theme.mq({ maxWidth: [960, 960, 1152, 1344] })};
  margin: 0 auto;
  padding: 0 1rem;
`
