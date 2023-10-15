import { GlobalComponents } from '@/components/global'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { DetailsComponents } from '@/components/details'
import styled from 'styled-components'
import { styles } from '@/styles/styles'
import products from '@/public/assets/context.json'

const Details:React.FC<any> = ({params,redux}) => {
console.log(redux)
  const [product,setProduct] = useState<any>({})

  const handleProduct = () =>{
    const { products } = redux
    const item = products.find((p:any) => p.id === Number(params.id))
    setProduct(item)
  }

  useEffect(()=>{
    handleProduct()
  },[redux])

  return (
    <DetailsStyle>
      <GlobalComponents.Layout className='details' title='Details' meta={[]}>
        <div className="details__hero">
          <div className="details__details-view-main">
            <DetailsComponents.View  product={product} />
            <DetailsComponents.Info product={product}  />
          </div>
          <DetailsComponents.Details redux={redux} product={product}  />
        </div>
        <DetailsComponents.Carousel title="Also You May Like" products={redux.products} />
      </GlobalComponents.Layout>
    </DetailsStyle>
  )
}

const DetailsStyle = styled.div`
  .details{
    main{
      padding:30px 50px;
    }
  }
  .details__hero{
    ${styles.mixins.flex('row','space-between','flex-start',null)}
  }
  .details__view-wrapper{
    width:60%;
  }
  .details__details-wrapper{
    width:40%;
  }
`

export default Details


export async function getStaticPaths() {
  try {
    const paths = products.map((p: any) => ({
      params: {
        id: p.id.toString(),
      },
    }));
    return {
      paths,
      fallback: false, // or 'blocking' or true
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }:{params:any}) {
  return {
    props: {
      params,
    },
  };
}