import React, { useState } from "react";
import styled from "styled-components";

interface CheckboxProps{
    name:string;
  }
  
const Checkbox:React.FC<CheckboxProps> = ({name}) =>{

  const [isChecked,setIsChecked] = useState<boolean>(false)

  return(
    <CheckboxStyle>
      <div className='products__checkbox'>
        {isChecked
          ? <div className="products__checkbox">
              <input type="checkbox" name={name} checked onChange={()=>setIsChecked(!isChecked)}/>
              <span>{name}</span>
            </div>
          : <div className="products__checkbox">
              <input type="checkbox" name={name} onChange={()=>setIsChecked(!isChecked)}/>
              <span>{name}</span>
            </div>
        }
      </div>
    </CheckboxStyle>
  )
}

const CheckboxStyle = styled.div`
  .products__checkbox{
    margin:5px 0px;
    span{
      margin-left:5px;
    }
  }
`
export default Checkbox