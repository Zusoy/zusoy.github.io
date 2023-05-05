import React from 'react'
import variants from 'pages/Home/Tiles/Experience/motion'
import { AnimatePresence, motion } from 'framer-motion'

const Title: React.FC = () =>
  <motion.div variants={ variants } initial="hidden" animate="visible">
    <h2>Experiences 🏆</h2>
  </motion.div>

export default Title
