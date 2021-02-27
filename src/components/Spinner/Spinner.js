import React from 'react'
import { motion } from 'framer-motion'
import './Spinner.css'

const Spinner = () => {
  return (
    <motion.div className="spinner__container"
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
    >
      <div className="spinner"></div>
    </motion.div>
  )
}

export default Spinner
