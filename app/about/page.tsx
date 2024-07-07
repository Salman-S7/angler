"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useSearchParams()
  const id = router.get("id");
  return (
    <div>New Page { id}</div>
  )
}

export default page