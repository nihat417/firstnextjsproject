"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const nav = useRouter();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        not-found du qaqa
        {/* <Link href="/"> Back to home</Link> */}
        <button onClick={()=>{nav.replace("/")}}>qayit dala</button>
    </div>
  )
}

export default NotFound;