import React from 'react'
import LeftQuote from '../Icons/LeftQuote'
import './Quotes.css'
import { motion } from 'framer-motion'

const quotesWrapperVariants = {
  hidden: {
    opacity: 0,
    x: '10vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: .15,
    }
  }
}

const quoteVariants = {
  hidden: {
    x: '8vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const Quotes = ({ quotes, author, genre, fetchAuthorQuotes }) => {
  return (
    <motion.figure className="quotes__wrapper"
      variants={quotesWrapperVariants}
      initial="hidden"
      animate="visible"
    >
      <blockquote className="quotes">
        <LeftQuote color="purple" size="28px" />
        {quotes.map(quote => (
          <motion.p key={quote._id} className="quote"
            variants={quoteVariants}
          >
            {quote.quoteText}
          </motion.p>
        ))}
      </blockquote>
      <figcaption
        className="quotes__author"
        onClick={fetchAuthorQuotes}
      >
        — {author}
        <br />
        <small><em>{genre}</em></small>
      </figcaption>
    </motion.figure>
  )
}

export default Quotes
