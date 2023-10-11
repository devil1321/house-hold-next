import React from 'react'
import Image from 'next/image'
const Search = () => {
  return (
   <div className='search'>
     <div className="search__field">
        <Image src="" alt="" />
        <input type="text" />
        <div className="search__matches">
            
        </div>
     </div>
     <button>Search</button>
   </div>
  )
}

export default Search
