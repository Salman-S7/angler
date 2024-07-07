import React from 'react'

const page = ({params}: {params : {id : number}}) => {

  return (
      <div>Page with some id { params.id }</div>
  )
}

export default page