import { GlobalComponents } from '@/components/global'
import { HomeComponents } from '@/components/home'
import React, { useEffect } from 'react'
import { styles } from '@/styles/styles'
import styled from 'styled-components'
import Link from 'next/link'

const Index:React.FC<{redux:any}> = ({redux}) => {
  return (
    <HomeStyle>
      <GlobalComponents.Layout className='home' title="Home" meta={[]}>
        <GlobalComponents.Search products={redux.products}/>
        <div className="home__hero">
          <HomeComponents.Icons />
          <HomeComponents.Banner />
          <div className="home__items">
            <HomeComponents.InnerItem text='INY VINTAGE CHAIR' imgSrc='/assets/home/inner-hero-1.png'/>
            <HomeComponents.InnerItem text='LARGE TERRACOTA VASE' imgSrc='/assets/home/inner-hero-2.png'/>
          </div>
        </div>
        <div className="home__feature">
          {redux.products.slice(0,8).map((p:any,i:number) =>{
            if(i === 0 || i === 7){
              return <HomeComponents.FeatureMainItem key={p.id} index={i} imgSrc={p.img} heading={p.name} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit?" />
            }else{
              return <HomeComponents.FeatureItem key={p.id} redux={redux} id={p.id} inCart={p.inCart} imgSrc={p.img} name={p.name} rating={p.rating} price={p.price}/>
            }
          })}
        </div>
        <HomeComponents.SecondBanner imgSrc='/assets/home/sub-hero.png' heading='BEDSHEET SETS' price={50} text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dignissimos!" />
        <div className="home__products">
          <h2>Top Rating</h2>
          <div className="home__products-place">
            {redux.products.slice(0,9).map((p:any) => <HomeComponents.Product key={p.id} redux={redux} id={p.id} inCart={p.inCart} imgSrc={p.img} name={p.name} rating={p.rating} price={p.price} />)}
            <button>Load More</button>
          </div>
        </div>
        <HomeComponents.SignUp heading='SING UP FOR OUR NEWSLETTER' subHeading='Subscribe for the latest DEALS and promotions' placeholder='Enter your e-mail address' />
      </GlobalComponents.Layout>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  .home__items{
    padding:0px 50px;
    ${styles.mixins.flex('row','space-between','flex-start','wrap')};
    ${styles.mixins.breakpoint_down('small',`
      padding:0px 10px;
    `)}
  }
  .home__feature{
    padding:0px 50px;
    margin:50px 0px;
    ${styles.mixins.flex('row','space-between','flex-start','wrap')};
    ${styles.mixins.breakpoint_down('small',`
      padding:0px 10px;
      ${styles.mixins.flex('row','center','flex-start','wrap')};
    `)}
  }
  .home__products{
    padding:0px 50px;
    margin:50px 0px;
    ${styles.mixins.breakpoint_down('small',`
      padding:0px 10px;
    `)}
    button{
      width:10%;
      display:block;
      margin:0px auto;
      ${styles.mixins.breakpoint_down('small',`
        width:100%;
      `)}
    }
    ${styles.components.button}
  }
  .home__products-place{
    div{
      width:33%;
      ${styles.mixins.breakpoint_down('small',`
        width:100%
      `)}
    }
    ${styles.mixins.flex('row','space-between','center','wrap')}
  }
`

export default Index