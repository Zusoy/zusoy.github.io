import React from 'react'
import variants from 'pages/Home/Tiles/Experience/motion'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const KnpLabs: React.FC = () =>
  <motion.div variants={ variants } initial="hidden" animate="visible">
    <Content>
      <h2>KNP Labs (3 years)</h2>
      <List>
        <li>Full stack developer with a team on <Link href='https://www.i24news.tv/en' target='_blank'>i24</Link></li>
        <li>Full stack developer with a team on <Link href='https://app.deliver.events/choose-event' target='_blank'>Deliver Events</Link> application</li>
        <li>Full stack developer with a team on <Link href='https://knplabs.com/fr/blog/anaka-retour-dexperience/' target='_blank'>Anaka</Link> application for CaCom</li>
      </List>
    </Content>
  </motion.div>

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const List = styled.ul`
  list-style: none;
`

const Link = styled.a(({ theme }) => `
  color: ${theme.colors.white};
`)

export default KnpLabs
