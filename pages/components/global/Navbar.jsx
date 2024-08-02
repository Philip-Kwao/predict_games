import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/logo-white.png'
import Link from 'next/link'
import { nav } from '@/data/nav'

const Navbar = () => {
  return (
    <div className="bg-green-800">
    <div className='flex items-center justify-between max-w-[90%] py-6 px-8  text-white mx-auto'>
      <div className='flex flex-1'>
      <Image src={Logo} alt='Logo' width={100} height={100} />
      </div>

      <navbar>
        <ul className='flex items-center justify-between'>
          {
            nav.map((item,key)=>(
              <li className='mx-4 capitalize' key={key}><Link href={item.link}>{item.name}</Link></li>
            ))
          }
        </ul>
      </navbar>
    </div>
    </div>
  )
}

export default Navbar