import React from 'react'

async function page({params}) {
  const { dpath } = await params;
  console.log(dpath)
  return (
    <div>
        <h1>Catch All Routs</h1>
        <p>Catch All Routs are used to match multiple routes in a single route. They are defined using the [...param] syntax in the file name. For example, if you have a route defined as /product/[...dpath], it will match any route that starts with /product/ and has any number of additional segments after it.</p>
        <p>In this example, the [...dpath] parameter will capture all the segments after /product/ and pass them as an array to the page component. You can then use this array to render different content based on the specific route that was matched.</p>
        <p>For example, if you navigate to /product/meat/123/review/456, the [...dpath] parameter will be an array containing {dpath}. You can then use this array to render different content based on the specific route that was matched.</p>
    </div>
  )
}

export default page