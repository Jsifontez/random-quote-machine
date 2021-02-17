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

      console.log(res.data[0])
      setQuotes(res.data[0].quoteText)
      setAuthor(res.data[0].quoteAuthor)
      setIsLoading(false)
    }

    fetchData()
  }, [isLoading])

  return (
    <section>
      {!isLoading &&
        <figure>
          <blockquote>
            <p>{quotes}</p>
          </blockquote>
          <figcaption style={{textAlign: 'right'}}>— {author}</figcaption>
        </figure>
      }
      {isLoading &&
        <p>Loading...</p>
      }
    </section>
  )
}

export default Wrapper
