import React from 'react'
import Twitter from '../Icons/Twitter'
import './ButtonsContainer.css'

const ButtonsContainer = ({ quote, author, fetchQuote, isActive}) => {
  let isQuoteLength = quote.length ? '' :  'buttons--centered'
  let isCentered = isActive ? isQuoteLength : 'buttons--centered'

  return (
    <div className={`buttons ${isCentered}`}>
      {isActive && quote.length > 0 &&
        <a
          className="btn btn--tweet"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text=🧐 "${quote}". ${author}`}
          target="_blank"
          rel="noreferrer"
        >
          <Twitter color="white" size="19px"/>
        </a>
      }
      <button onClick={fetchQuote} className="btn">New Quote</button>
    </div>
  )
}

export default ButtonsContainer
