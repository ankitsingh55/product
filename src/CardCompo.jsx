import Card from './Card';
import  products  from './Products';

const CardCompo=()=> {
  return (
   <>
   <h1 className="heading">Products-</h1>
   {products.map((val)=>{
    return(
      <Card 
title= {val.title}
description ={val.description}
price={val.price}
img={val.img}
 />
    )
   })}
 
 
   </>
  );
}

export default CardCompo;
