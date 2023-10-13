import React from 'react'
import styled from 'styled-components';

interface HeadingProps{
  heading:string;
  text:string;
}

const Heading:React.FC<HeadingProps> = ({heading,text}) => {
  return (
    <HeadingStyle>
      <div className='products__heading'>
        <h2>{heading}</h2>
        <p>{text.toLowerCase()}</p>
      </div>
    </HeadingStyle>
  )
}

const HeadingStyle = styled.div`
  .products__heading{
    margin-top:30px;
    h2,p{
      width:100%;
    }
    p{
      font-style:italic;
    }
  }
`

export default Heading
