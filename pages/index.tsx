import { GlobalComponents } from '@/components/global'
import { HomeComponents } from '@/components/home'
import React, { useEffect } from 'react'

const Index:React.FC<{reduxProducts:any[]}> = ({reduxProducts}) => {
  return (
    <GlobalComponents.Layout className='home' title="Home" meta={[]}>
      <GlobalComponents.Search />
      <div className="home__hero">
        <HomeComponents.Icons />
        <HomeComponents.Banner />
        <div className="home__items">
          <HomeComponents.InnerItem text='' imgSrc=''/>
          <HomeComponents.InnerItem text='' imgSrc=''/>
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
  )
}

export default Index