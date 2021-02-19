import React from 'react'
import './ButtonsContainer.css'

const ButtonsContainer = ({ quotes, author, fetchQuote}) => {
  return (
    <div className="buttons">
      <a
        className="btn btn--tweet"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=🧐 "${quotes}". ${author}`}
        target="_blank"
        rel="noreferrer"
      >
        T
      </a>
      <button onClick={fetchQuote} className="btn">New Quote</button>
    </div>
  )
}

export default ButtonsContainer
