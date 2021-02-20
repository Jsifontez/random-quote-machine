import React from 'react'
import LeftQuote from '../Icons/LeftQuote'
import './Quotes.css'

const Quotes = ({ quotes, author, fetchAuthorQuotes }) => {
  return (
    <figure className="quotes__wrapper">
      <blockquote className="quotes">
        <LeftQuote color="purple" size="28px" />
        {quotes.map(quote => (
          <p key={quote._id} className="quote">{quote.quoteText}</p>
        ))}
      </blockquote>
      <figcaption
        className="quotes__author"
        onClick={fetchAuthorQuotes}
      >
        — {author}
      </figcaption>
    </figure>
  )
}

export default Quotes
