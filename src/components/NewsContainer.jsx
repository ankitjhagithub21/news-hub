import React from 'react'
import News from './News'

const NewsContainer = ({articles}) => {
 
    return (
        <section>
            <div className="container  py-24 mx-auto">

                <div className="flex flex-wrap">
                    {
                        articles
                            .filter(article => article.urlToImage && article.author && article.title)
                            .map(article => (
                               <News key={article.url} image={article.urlToImage} author={article.author} title={article.title} url={article.url}/>
                            ))

                    }

                </div>
            </div>
        </section>

    )
}

export default NewsContainer