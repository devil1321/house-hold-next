import React from 'react'

interface ProductProps{
    name:string;
    rating:number;
    price:string;
}

const Product:React.FC<ProductProps> = ({name,rating,price}) => {
  return (
    <div>
    </div>
  )
}

export default Product
