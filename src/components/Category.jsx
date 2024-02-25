import React from 'react'

const Category = ({setCategory}) => {
  const categories= [
    "business",
    "crime",
    "domestic",
    "education",
    "entertainment",
    "environment",
    "food",
    "health",
    "lifestyle",
    "other",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
    "tourism",
    "world",
  ]
  return (
    <div className='flex overflow-x-scroll gap-3 p-5 mb-5'>
        {
            categories.map((category,index)=>{
                return <button className='px-2 py-1 rounded-full bg-gray-200 outline-none text-green-700' key={index} onClick={()=>setCategory(category)}>{category}</button>
            })
        }
    </div>
  )
}

export default Category