import React, { useEffect, useState } from 'react'
import NewsContainer from './NewsContainer';

const Home = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const getNews = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`)
            const data = await res.json()
            setArticles(data.articles)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <>
            <NewsContainer articles={articles} />
        </>
    )
}

export default Home