import styled from 'react-emotion'
import GatsbyLink from 'gatsby-link'

export default styled(GatsbyLink)`
  color: ${props => props.theme.color.primary};
  text-decoration: none;
`
