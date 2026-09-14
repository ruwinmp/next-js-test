import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

function page() {
  return (
    <>
      <div>Product</div>

      <br />

      <ul>
        <li className={styles.item}><Link href="/product/meat">Meat</Link></li>
        <li className={styles.item}><Link href="/product/groceries">Groceries</Link></li>
      </ul>
    </>
  )
}

export default page