import React from 'react'
import { styles } from '@/styles/styles'
import styled from 'styled-components'


const Search:React.FC<{products:any}> = ({products}) => {
  return (
   <SearchStyle>
    <div className='search'>
      <div className="search__field">
         <img src="/assets/icons/magnifer.png" alt="magnifier" />
         <input type="text" />
         <div className="search__matches">

         </div>
      </div>
      <button>Search</button>
    </div>
   </SearchStyle>
  )
}

const SearchStyle = styled.div`
  .search {
    width:40%;
    margin:20px auto;
    ${styles.mixins.flex('row','center','center',null)}
    ${styles.mixins.breakpoint_down('small',`
      width:90%;
    `)}
  }
  .search__field{
    border-radius:25px;
    border:2px solid black;
    padding:7px 5px;
    width:70%;
    img{
      position:relative;
      top:3px;
      left:0px;
      width:20px;
    }
    input{
      margin-left:10px;
      width:70%;
      outline:none;
      border:0px;
      backgorund:transparent;
    }
  }
  button{
    width:120px;
    height:45px !important;
  }
  ${styles.components.button}
`
export default Search
