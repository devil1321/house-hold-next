import { GlobalComponents } from '@/components/global'
import { HomeComponents } from '@/components/home'
import React, { useEffect } from 'react'
import { styles } from '@/styles/styles'
import styled from 'styled-components'

const Index:React.FC<{reduxProducts:any[]}> = ({reduxProducts}) => {
  return (
    <HomeStyle>
      <GlobalComponents.Layout className='home' title="Home" meta={[]}>
        <GlobalComponents.Search products={reduxProducts}/>
        <div className="home__hero">
          <HomeComponents.Icons />
          <HomeComponents.Banner />
          <div className="home__items">
            <HomeComponents.InnerItem text='INY VINTAGE CHAIR' imgSrc='/assets/home/inner-hero-1.png'/>
            <HomeComponents.InnerItem text='LARGE TERRACOTA VASE' imgSrc='/assets/home/inner-hero-2.png'/>
          </div>
        </div>
        <div className="home__feature">
          {reduxProducts.slice(0,8).map((p:any,i:number) =>{
            if(i === 0 || i === 7){
              return <HomeComponents.FeatureMainItem key={p.id} heading={p.name} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit?" />
            }else{
              return <HomeComponents.FeatureItem key={p.id} name={p.name} rating={p.rating} price={p.price}/>
            }
          })}
        </div>
        <HomeComponents.SecondBanner />
        <div className="home__products">
          <h2>Top Rating</h2>
          <div className="home__products-place">
            {reduxProducts.map((p:any) => <HomeComponents.Product key={p.id} name={p.name} rating={p.rating} price={p.price} />)}
            <button>Load More</button>
          </div>
        </div>
        <HomeComponents.SignUp />
      </GlobalComponents.Layout>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  .home__items{
    padding:0px 50px;
    ${styles.mixins.flex('row','space-between','center',null)};
  }
  .home__feature{
    padding:0px 50px;
    margin:50px 0px;
    ${styles.mixins.flex('row','space-between','center','wrap')};
  }
`

export default Index