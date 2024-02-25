import React, { useEffect, useState } from 'react';
import NewsContainer from './NewsContainer';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Category from './Category';

const Home = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const [query, setQuery] = useState('');
    const [category,setCategory] = useState(null)
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getNews = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://newsdata.io/api/1/news?apikey=${apikey}&q=${query!='' ? query : 'india'}&language=en&category=${category==null ? 'top': `${category}`}`);
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
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getNews();
    };

    return (
        <>
            <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
            <Category setCategory={setCategory}/>
            {loading ? (
               <Loader/>
            ) : error || !articles || articles.length==0 ? (
                <div className='text-center text-2xl h-[50vh]'>News not found</div>
            ) : (
                <NewsContainer articles={articles} category={category} />
            )}
        </>
    );
};

export default Home;
