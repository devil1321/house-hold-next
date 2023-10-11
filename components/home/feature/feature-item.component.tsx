import React from 'react'

interface FeatureItemProps{
  name:string;
  rating:number;
  price:number;
}

const FeatureItem:React.FC<FeatureItemProps> = ({name,rating,price}) => {
  return (
    <div>
      
    </div>
  )
}

export default FeatureItem
