import React from 'react'
import './ButtonsContainer.css'

const ButtonsContainer = ({ quotes, author, fetchQuote}) => {
  return (
    <div className="buttons">
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
  )
}

export default ButtonsContainer
