import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
      <div>Product</div>

      <br />

      <ul>
        <li><Link href="/product/meat">Meat</Link></li>
        <li><Link href="/product/groceries">Groceries</Link></li>
      </ul>
    </>
  )
}

export default page