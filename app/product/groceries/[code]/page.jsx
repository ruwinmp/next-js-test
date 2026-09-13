async function page({params}) {
  const {code} = await params

  return (
    <div>Grocery Item {code}</div>
  )
}

export default page