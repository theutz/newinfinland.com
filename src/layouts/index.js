import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

const Layout = ({
  children,
  data: {
    site: {
      siteMetadata: { title, description, keywords },
    },
  },
}) => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(', ') },
        ]}
      />
      <Header siteTitle={title} />
      <div>{children()}</div>
    </div>
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
