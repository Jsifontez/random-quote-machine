import React from 'react'
import './Quotes.css'

const Quotes = ({ quotes, author, fetchAuthorQuotes }) => {
  return (
    <figure className="quotes__wrapper">
      <blockquote className="quotes">
        {quotes.map(quote => (
          <p key={quote._id} className="quote">{quote.quoteText}</p>
        ))}
      </blockquote>
      <figcaption
        style={{textAlign: 'right', marginRight: '40px', cursor:'pointer'}}
        onClick={fetchAuthorQuotes}
      >
        — {author}
      </figcaption>
    </figure>
  )
}

export default Quotes
