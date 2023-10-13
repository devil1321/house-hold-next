import { GlobalComponents } from '@/components/global';
import React, { useState } from 'react'
import styled from 'styled-components';

const Gender = () => {
  return (
    <GenderStyle>
      <div className='products__gender'>
        <h3>Gender</h3>
        <GlobalComponents.Checkbox name="Man" />
        <GlobalComponents.Checkbox name="Woman" />
      </div>
    </GenderStyle>
  )
}

const GenderStyle = styled.div`
  .products__gender{
    h3{
      margin:10px 0px;
    }
  }
`


export default Gender
