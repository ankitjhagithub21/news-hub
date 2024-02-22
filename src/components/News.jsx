import React from 'react'

const News = ({ image, title, url }) => {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={image}
                    alt="content"
                />
                <div className='h-44 relative'>
                    <p className='text-gray-800'>
                        {title.slice(0,100)}...
                    </p>
                    <a href={url} target='_blank' className='underline text-indigo-500 absolute bottom-0'>Read Article</a>
                </div>
            </div>
        </div>
    )
}

export default News