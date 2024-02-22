import React, { useEffect, useState } from 'react';
import NewsContainer from './NewsContainer';
import SearchBar from './SearchBar';

const Home = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const [query, setQuery] = useState('india');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getNews = async () => {
        try {
            const res = await fetch(`https://newsdata.io/api/1/news?apikey=${apikey}&q=${query}&language=en`);
            if (!res.ok) {
                throw new Error('Server response not ok');
            }
            const data = await res.json();
            setArticles(data.results);
            setLoading(false);
            setError(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        getNews();
    };

    return (
        <>
            <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
            {loading ? (
                <p>Loading</p>
            ) : error || !articles || articles.length==0 ? (
                <p className='text-center text-2xl'>News not found</p>
            ) : (
                <NewsContainer articles={articles} />
            )}
        </>
    );
};

export default Home;
