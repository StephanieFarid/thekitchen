import React from 'react'
import Image from '@/node_modules/next/image'
import chris from '../assets/Chris.png'
import steph from '../assets/steph.png'
import moyo from '../assets/moyo.png'
import ruka from '../assets/Ruka.png'
import stephanie from '../assets/Stephanie.png'


const page = () => {
  return (
    <div>
      <div className = "flex">
      <Image
      className = "mb-5"
      src={chris}
      width={200}
      height={200}
      alt="Picture of the author"
      />
      <h1 className ="pl-15 mt-10"> Meet Chris</h1>
      </div>

      <div>
      <Image
        className = ""
        src={steph}
        width={200}
        height={200}
        alt="Picture of the author"
        />
      </div>   
      
      <div>   
      <Image
        className = ""
        src={moyo}
        width={200}
        height={200}
        alt="Picture of the author"
        />
      </div>

      <div>
      <Image
        className = ""
        src={ruka}
        width={200}
        height={200}
        alt="Picture of the author"
        />
      </div>

      <div>
      <Image
        className = ""
        src={stephanie}
        width={200}
        height={200}
        alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default page