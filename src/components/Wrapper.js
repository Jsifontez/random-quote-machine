import React, { useState } from 'react'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer'
import useFetch from '../custom-hooks/useFetch'

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
    <section>
      {isLoading &&
        <p>Loading Quote...</p>
      }
      {!isLoading &&
        <figure>
          <blockquote>
            {quotes.map(quote => (
              <p key={quote._id}>{quote.quoteText}</p>
            ))}
          </blockquote>
          <figcaption
            style={{textAlign: 'right', marginRight: '40px', cursor:'pointer'}}
            onClick={fetchAuthorQuotes}
          >
            — {author}
          </figcaption>
        </figure>
      }
      {!isLoading &&
        <ButtonsContainer quotes={quotes} author={author} fetchQuote={fetchQuote}/>
      }
    </section>
  )
}

export default Wrapper
