import React from 'react'
import variants from 'pages/Home/Tiles/Experience/motion'
import { motion } from 'framer-motion'

const Kelcible: React.FC = () =>
  <motion.div variants={ variants } initial="hidden" animate="visible">
    <h2>Kelcible</h2>
  </motion.div>

export default Kelcible
