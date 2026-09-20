import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import groceriesImg from '../../../public/img/groceries.jpg' 

const grocerieItems = ['groc-pack-1', 'groc-pack-2', 'groc-pack-3'];


function page() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
    width: '100px',
    height: 'auto',
  }

  return (
    <>
      <div>Groceries</div>
      
      <Image src={groceriesImg} alt="Groceries" width={1000} height={100} className="groc-img" />

      <br />
      
      <img src={groceriesImg.src} alt="Groceries" className="groc-img" />
    
      <br />

      <Image src={"https://fastly.picsum.photos/id/213/200/300.jpg?hmac=t-54teMEgFL3q9WPaRq2t7YdGCU9aIRw77OCaHlSVRs"} 
        alt="Random Image" 
        width={200} 
        height={300} 
      /> 
      
      <br />

      <ul>
        {grocerieItems.map((item) => (
          <li key={item}>
            <Link href={`/product/groceries/${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <Image src={`/img/${item}.png`} alt={item} width={200} height={200} style={imageStyle} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default page