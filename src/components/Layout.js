import React from 'react'
import '../styles/Layout.css'
import { motion } from 'framer-motion'

const layoutVariants = {
  hidden: {
    y: '-30vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .5,
      duration: .35,
      when: "beforeChildren",
      staggerChildren: 1,
    }
  }
}

const Layout = (props) => {
  return (
    <motion.main className="layout"
      variants={layoutVariants}
      initial="hidden"
      animate="visible"
    >
      {props.children}
    </motion.main>
  )
}

export default Layout
