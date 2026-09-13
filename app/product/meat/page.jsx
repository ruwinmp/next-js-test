import React from 'react'
import Link from 'next/link'

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
          </li>
        ))}
      </ul>
    </>
  )
}

export default page