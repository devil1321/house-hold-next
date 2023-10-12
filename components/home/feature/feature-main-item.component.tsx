import React from 'react'

interface FeatureMainItemProps{
    heading:string;
    text:string;
}

const FeatureMainItem:React.FC<FeatureMainItemProps> = ({heading,text}) => {
  return (
    <div>
      <h3>Main item {heading}</h3>
    </div>
  )
}


export default FeatureMainItem
