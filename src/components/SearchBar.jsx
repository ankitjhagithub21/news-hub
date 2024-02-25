import React from 'react'
import {FaSearch} from "react-icons/fa"
const SearchBar = ({query,setQuery,handleSubmit}) => {
   
  

  return (
    <section className='px-5'>
        <div className="container mx-auto p-5 py-24 rounded-lg my-12" id='searchBox'>
            
        <form className='md:w-1/2 mx-auto w-full flex bg-white px-4 py-2 rounded-lg' onSubmit={handleSubmit}>
            <input type="text" className='w-full outline-none' placeholder='Search News...' value={query} onChange={(e)=>setQuery(e.target.value)} required/>
            <button>
                <FaSearch/>
            </button>
        </form>
        </div>
    </section>
  )
}

export default SearchBar