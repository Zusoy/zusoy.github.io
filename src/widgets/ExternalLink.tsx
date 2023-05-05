import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly children: React.ReactNode
  readonly href: string
}

const ExternalLink: React.FC<Props> = ({ children, href }) =>
  <Link target='_blank' href={ href }>
    { children }
  </Link>

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

export default ExternalLink
