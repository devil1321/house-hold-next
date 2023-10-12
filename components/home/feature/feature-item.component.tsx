import React from 'react'

interface FeatureItemProps{
  name:string;
  rating:number;
  price:number;
}

const FeatureItem:React.FC<FeatureItemProps> = ({name,rating,price}) => {
  return (
    <div>
      <h3>Item {name}</h3>
    </div>
  )
}

export default FeatureItem
