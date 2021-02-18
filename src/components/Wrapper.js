import React, { useState, useEffect } from 'react'

const Wrapper = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotes, setQuotes] = useState([])
  const [author, setAuthor] = useState('')

  useEffect( () => {
    const API_URL = "https://quote-garden.herokuapp.com/";
    const API_VERSION = "api/v3/";

    const fetchData = async () => {
      if (!isLoading) return

      const data = await fetch(`${API_URL}${API_VERSION}quotes/random`)
      const res = await data.json()

      setQuotes(res.data[0].quoteText)
      setAuthor(res.data[0].quoteAuthor)
      setIsLoading(false)
    }

    fetchData()
  }, [isLoading])

  const fetchQuote = () => {
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
            <p>{quotes}</p>
          </blockquote>
          <figcaption style={{textAlign: 'right', marginRight: '40px'}}>— {author}</figcaption>
        </figure>
      }
      {!isLoading &&
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=🧐 "${quotes}". ${author}`}
            target="_blank"
            rel="noreferrer"
          >
            Tweet
          </a>
          <button onClick={fetchQuote}>Quote</button>
        </div>
      }
    </section>
  )
}

export default Wrapper
