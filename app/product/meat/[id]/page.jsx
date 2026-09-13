async function page({params}) {
  const {id} = await params

  return (
    <div>Meat Item {id}</div>
  )
}

export default page