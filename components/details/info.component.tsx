import { styles } from '@/styles/styles';
import React from 'react'
import styled from 'styled-components';

interface InfoProps{
  product:any;
}

const Info:React.FC<InfoProps> = ({product}) => {
  return (
    <InfoStyle>
      <div className='details__info'>
        <h3>Details</h3>
        <p>Twin duvet cover set in soft, woven fabric made from a Tencel™lyocell and cotton blend with a printed pattern. One pillowcase. Thread count 144.</p>
        <p>Composition — Cotton 50%, Lyocell 50%</p>
        <p>Art. No. — 0643448004</p>
      </div>
    </InfoStyle>
  )
}

const InfoStyle = styled.div`
  .details__info{
    width:99%;
    box-sizing:border-box;
    padding:40px 50px;
    background-color:${styles.colors.goldenrod};
    h3,p{
      margin:10px 0px;
    }
    p:nth-of-type(1){
      margin:40px 0px;
      width:80%;
    }
  }
`

export default Info
