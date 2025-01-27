import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
function NavBar() {
  return (
    <div className='flex items-center justify-between py-3 px-5 shadow-sm boreder-b-[1px]'>
      <Image src='/Car_Rental.png'alt='logo' width={250} height={100} className=''/>
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-500 cursor-pointer px-3 p-2 rounded-full hover:text-white'>Home</h2>
        <h2 className='hover:bg-blue-500 cursor-pointer px-3 p-2 rounded-full hover:text-white'>History</h2>
        <h2 className='hover:bg-blue-500 cursor-pointer px-3 p-2 rounded-full hover:text-white'>Contact</h2>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar
