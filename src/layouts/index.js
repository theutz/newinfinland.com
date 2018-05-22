import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { normalize } from 'polished'

import * as theme from 'theme'
import Header from 'components/header'
import Container from 'components/Container'
import AppStyle from 'components/AppStyle'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  ${normalize()}
`

const Layout = ({
  children,
  data: {
    site: {
      siteMetadata: { title, description, keywords },
    },
  },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join(', ') },
          ]}
        />
        <Header siteTitle={title} />
        <Container>{children()}</Container>
      </AppStyle>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        keywords
        description
      }
    }
  }
`
