import { useState, useEffect } from 'react'
import changeVariables from '../utils/change-css-variables'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotes, setQuotes] = useState([{quoteText: ''}])
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  useEffect(() => {
    if (!isLoading) return

    const fetchData = async () => {
      const data = await fetch(url)
      const res = await data.json()

      setQuotes([...res.data])
      setAuthor(res.data[0].quoteAuthor)
      setGenre(res.data[0].quoteGenre)
      setIsLoading(false)
    }

    fetchData()
    changeVariables()
  }, [isLoading, url])

  return {quotes, author, genre, isLoading, setIsLoading}
}

export default useFetch
