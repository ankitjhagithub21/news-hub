import React from 'react'
import News from './News'

const NewsContainer = ({ category, articles }) => {

    return (
        <section>
            <div className="container mx-auto">
                    <h2 className='text-center  text-3xl font-bold mb-5'>{category ? category : "Latest News"}</h2>
                <div className="flex flex-wrap">
                    {
                        articles
                            .filter(article => article.image_url && article.title)
                            .map((article,index) => (
                                <News key={index} image={article.image_url} title={article.title} url={article.link} />
                            ))

                    }

                </div>
            </div>
        </section>

    )
}

export default NewsContainer