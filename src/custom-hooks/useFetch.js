import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotes, setQuotes] = useState([])
  const [author, setAuthor] = useState('')

  useEffect(() => {
    if (!isLoading) return

    const fetchData = async () => {
      const data = await fetch(url)
      const res = await data.json()

      setQuotes([...res.data])
      setAuthor(res.data[0].quoteAuthor)
      setIsLoading(false)
    }

    fetchData()
  }, [isLoading, url])

  return {quotes, author, isLoading, setIsLoading}
}

export default useFetch
