import React, { useState } from 'react'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer'
import Quotes from './Quotes/Quotes'
import useFetch from '../custom-hooks/useFetch'
import './Wrapper.css'

const Wrapper = (props) => {
  const [url, setUrl] = useState('https://quote-garden.herokuapp.com/api/v3/quotes/random')
  const {quotes, author, isLoading, setIsLoading} = useFetch(url)

  const fetchQuote = () => {
    setUrl('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    setIsLoading(true)
  }

  const fetchAuthorQuotes = () => {
    setUrl(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
    setIsLoading(true)
  }

  return (
    <section className="Wrapper">
      {isLoading &&
        <p style={{textAlign: 'center'}}>Loading Quote...</p>
      }
      {!isLoading &&
        <>
          <Quotes quotes={quotes} author={author} fetchAuthorQuotes={fetchAuthorQuotes} />
          <ButtonsContainer quotes={quotes} author={author} fetchQuote={fetchQuote}/>
        </>
      }
    </section>
  )
}

export default Wrapper
