import React, { useState } from 'react'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer'
import Quotes from './Quotes/Quotes'
import useFetch from '../custom-hooks/useFetch'
import './Wrapper.css'
import { motion } from 'framer-motion'
import Spinner from './Spinner/Spinner'

const Wrapper = (props) => {
  const [url, setUrl] = useState('https://quote-garden.herokuapp.com/api/v3/quotes/random')
  const {quotes, author, genre, isLoading, setIsLoading} = useFetch(url)
  const [isAuthorActive, setIsAuthorActive] = useState(true)

  const fetchQuote = () => {
    if (!isAuthorActive && isLoading) return

    setUrl('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    setIsLoading(true)

    if (!isAuthorActive) {
      setIsAuthorActive(true)
    }
  }

  const fetchAuthorQuotes = () => {
    if (!isAuthorActive) return

    setUrl(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
    setIsLoading(true)
    setIsAuthorActive(false)
  }

  return (
    <motion.section className="Wrapper"
      initial={{ right: '50vw', opacity: 0}}
      animate={{ right: 0, opacity: 1}}
    >
      {isLoading &&
        <Spinner />
      }
      {!isLoading &&
        <Quotes
          quotes={quotes}
          author={author}
          genre={genre}
          fetchAuthorQuotes={fetchAuthorQuotes}
        />
      }
      <ButtonsContainer
        quote={quotes[0].quoteText}
        author={author}
        fetchQuote={fetchQuote}
        isActive={isAuthorActive}
      />
    </motion.section>
  )
}

export default Wrapper
