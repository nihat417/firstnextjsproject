"use client"
import React from 'react'
import { usePathname,useRouter, useSearchParams } from 'next/navigation'


const custompath = () => {
    const path = usePathname();
    const route = useRouter();
    const params = useSearchParams();
  return (
    <div className="red h-screen flex flex-col items-center justify-center">
        <h4>current page : {path}</h4>
        {/* <h4> message : {params.get("custompage")}</h4> */}
        <button className='bg-red-400' onClick={()=>route.refresh()}>refresh button</button>
    </div>
  )
}

export default custompath;