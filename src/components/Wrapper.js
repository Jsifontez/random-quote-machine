import React, { useState } from 'react'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer'
import Quotes from './Quotes/Quotes'
import useFetch from '../custom-hooks/useFetch'
import './Wrapper.css'

const Wrapper = (props) => {
  const [url, setUrl] = useState('https://quote-garden.herokuapp.com/api/v3/quotes/random')
  const {quotes, author, isLoading, setIsLoading} = useFetch(url)
  const [isAuthorActive, setIsAuthorActive] = useState(true)

  const fetchQuote = () => {
    setUrl('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    setIsLoading(true)
    if (!isAuthorActive) {
      setIsAuthorActive(true)
    }
    changeCSSVariables()
  }

  const fetchAuthorQuotes = () => {
    if (!isAuthorActive) return

    setUrl(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
    setIsLoading(true)
    setIsAuthorActive(false)
    changeCSSVariables()
  }

  const changeCSSVariables = (props) => {
    // to call randomize the custime the colors
    function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    function randomColors() {
      // select random hue, light and saturation
      const baseHue = random(0, 360)
      const baseSat = random(60, 80)
      const baseLight = random(20, 40)

      // assign colors using hsl() CSS function
      const mainColor = `hsl(${baseHue}, ${baseSat}%, ${baseLight}%)`
      const lightColor = `hsl(${baseHue}, ${baseSat-35}%, ${baseLight+35}%)`

      return [mainColor, lightColor]
    }

    const colors = randomColors()

    // set the colors of CSS variable
    document.documentElement.style.setProperty("--main-color", colors[0])
    document.documentElement.style.setProperty("--light-color", colors[1])
  }

  return (
    <section className="Wrapper">
      {isLoading &&
        <p style={{textAlign: 'center'}}>Loading Quote...</p>
      }
      {!isLoading &&
        <>
          <Quotes quotes={quotes} author={author} fetchAuthorQuotes={fetchAuthorQuotes} />
          <ButtonsContainer
            quotes={quotes}
            author={author}
            fetchQuote={fetchQuote}
            isActive={isAuthorActive}
          />
        </>
      }
    </section>
  )
}

export default Wrapper
