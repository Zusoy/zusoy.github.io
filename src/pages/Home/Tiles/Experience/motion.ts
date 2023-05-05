import { Variants } from 'framer-motion'

const contentMotion: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.2,
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    }
  },
}

export default contentMotion
