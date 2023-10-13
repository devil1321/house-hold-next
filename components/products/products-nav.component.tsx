import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavStyle>
        <div className='products__nav'>
            <div className="products__nav-icon">
                <img src="/assets/icons/glass.png" alt="glass-icon" />
                <span>FILTER & SORT</span>
            </div>
            <div className="products__nav-buttons">
                <h3>Models</h3>
                <h3>Products</h3>
            </div>
        </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
    .products__nav{
        margin:30px 0px;
        ${styles.mixins.flex('row','space-between','center',null)}
    }
    .products__nav-icon{
        span{
            margin-left:10px;
        }
    }
    .products__nav-buttons{
        width:150px;
        ${styles.mixins.flex('row','space-between','center',null)}
        h3{
            cursor:pointer;
            font-size:${styles.fn.pxToRem(14)};
            &:hover{
                opacity:0.7;
            }
        }
    }
`

export default Nav
