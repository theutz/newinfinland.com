import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'components/Container'

export const Header = ({ siteTitle }) => (
  <div>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </div>
)
