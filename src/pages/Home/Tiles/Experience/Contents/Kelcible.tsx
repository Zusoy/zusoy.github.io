import React from 'react'
import variants from 'pages/Home/Tiles/Experience/motion'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Kelcible: React.FC = () =>
  <motion.div variants={ variants } initial="hidden" animate="visible">
    <Content>
      <h2>Kelcible (2 years)</h2>
      <List>
        <li>WordPress developer</li>
        <li>Prestashop developer</li>
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

export default Kelcible
