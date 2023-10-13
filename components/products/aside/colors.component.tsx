import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

const Colors = () => {
    console.log(styles.colors_array)
  return (
    <ColorStyles>
        <h3>Colors</h3>
        <div className='products__colors'>
            {styles.colors_array.map((c:string)=> <div key={c} style={{backgroundColor:c}} className='products__color'></div>)}
        </div>
    </ColorStyles>
  )
}

const ColorStyles = styled.div`
    .products__colors{
        width:100%;
        ${styles.mixins.flex('row','space-between','center','wrap')}
        h3{
            margin:10px 0px;
        }
    }
    .products__color{
        cursor:pointer;
        margin:10px 10px 10px 0px;
        width:30px !important;
        height:30px !important;
        border:1px solid lightgrey;
        border-radius:5px;
        &:hover{
            opacity:0.7;
        }
    }
`

export default Colors
