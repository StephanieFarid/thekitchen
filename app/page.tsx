import React from 'react'
import Image from '@/node_modules/next/image'
import logo from '../app/assets/kitchenMainPhoto.png'

const page = () => {
  return (
    <div>
      <Image
      className = "mx-auto"
      src={logo}
      width={500}
      height={500}
      alt="Picture of the author"
      />
    </div>
  )
}

export default page
