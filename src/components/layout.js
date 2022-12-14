import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import '../assets/scss/main.scss'

const Head = ({title, metas}) => (
  <>
    <title>{title}</title>
    {metas.map(({name, content}, index) => (<meta key={index} name={name} content={content} />) )}
  </>
)

const Layout = ({ children, location }) => {
  const metadata = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <>
      <Head
        title={metadata.site.siteMetadata.title}
        metas={[
          {
            name: 'description',
            content: 'CancaoNova Chorus Next 1.0 promotion page',
          },
          {
            name: 'keywords',
            content:
              'sample, something, cancaonova, カンサォンノーヴァ, カンサォン・ノーヴァ, cancaonovachor, 演奏会, chorus next',
          },
        ]}
      />
      {content}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
