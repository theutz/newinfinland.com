import React from 'react'
import styled from 'react-emotion'

import Link from 'components/Link'
import Container from 'components/Container'

const Header = ({ siteTitle, ...props }) => (
  <div {...props}>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </div>
)

export default styled(Header)`
  overflow: hidden;
`
