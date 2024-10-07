import React from 'react'
import Marquee from 'react-fast-marquee'

export const EnrolCourse = () => {
  return (
    <div className='flex text-sm text-red-950 font-popppins bg-cyan-400'>

        <Marquee pauseOnHover={true}>
        Please Register/Login to see the details of the courses of <span className='text-xl '> Tech Hub</span> 
        </Marquee>
    </div>
  )
}

