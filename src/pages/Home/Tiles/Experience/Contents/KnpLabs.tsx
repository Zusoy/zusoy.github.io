import React from 'react'
import variants from 'pages/Home/Tiles/Experience/motion'
import { motion } from 'framer-motion'

const KnpLabs: React.FC = () =>
  <motion.div variants={ variants } initial="hidden" animate="visible">
    <h2>KNP Labs</h2>
  </motion.div>

export default KnpLabs
