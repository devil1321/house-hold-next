import { styles } from '@/styles/styles';
import React, { use, useEffect, useState } from 'react'
import styled from 'styled-components';

interface ViewProps{
  product:any;
}

const View:React.FC<ViewProps> = ({product}) => {

  const [imageSrc,setImageSrc] = useState<string>(product?.img)

  useEffect(()=>{
    setImageSrc(product?.img)
  },[product])

  return (
    <ViewStyle className='details__view-wrapper'>
      <div className='details__view'>
        <div className="details__view-images">
          <div className="details__view-sm-img" onClick={()=>setImageSrc(product.img)}>
            <img src={product?.img} alt="image"/>
          </div>
          <div className="details__view-sm-img" onClick={()=>setImageSrc("/assets/details/details-1.png")}>
            <img src="/assets/details/details-1.png" alt="image" />
          </div>
        </div>
        <div className="details__view-lg-img">
          <img src={imageSrc} alt="main-image" />
        </div>
      </div>
    </ViewStyle>
  )
}

const ViewStyle = styled.div`
  .details__view{
    width:100%;
  }
  .details__view-images{
    min-width:165%;
    ${styles.mixins.flex('row','flex-start','center',null)}
  }
  .details__view-sm-img{
    width:50%;
    height:550px;
    overflow:hidden;
    img{
      width:100%;
    }
  }
  .details__view-lg-img{
    margin-top:40px;
    min-width:165%;
    height:100%;
    overflow:hidden;
    img{
      width:100%;
    }
  }
`

export default View
