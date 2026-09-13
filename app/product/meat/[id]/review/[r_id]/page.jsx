import React from 'react'

async function page({params}) {
  const {id, r_id} = await params;
  return (
    <div>Meat Item {id} Review {r_id}</div>
  )
}

export default page