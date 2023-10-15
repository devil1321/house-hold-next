import React from 'react'
import styled from 'styled-components';

interface SubSummaryProps{
  summary:number;
}

const SubSummary:React.FC<SubSummaryProps> = ({summary}) => {
  return (
    <SubSummaryStyle>
      <div className='cart__sub-summary'>
        <h3>Total</h3>
        <h3>{summary ? summary : 0}$</h3>
      </div>
    </SubSummaryStyle>
  )
}

const SubSummaryStyle = styled.div`
  h3{
    text-align:right;
    padding:20px 0px;
  }
  h3:first-of-type{
    border-bottom:2px solid black;
  }
`

export default SubSummary
