import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const meatItems = ['chicken', 'beef', 'pork', 'lamb']

function page() {
  return (
    <>
      <div>Meat Items</div>
    
      <br />

      <ul>
        {meatItems.map((item) => (
          <li key={item}>
            <Link href={`/product/meat/${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <Image src={`/img/${item}.jpg`} alt={item} width={200} height={200} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default page