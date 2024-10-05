import React from 'react'
import Marquee from 'react-fast-marquee'

export const EnrolCourse = () => {
  return (
    <div className='flex'>
        <button className='btn btn-secondary' > Log in </button>
        <Marquee pauseOnHover={true}>
        To Enroll plz log in
        </Marquee>
    </div>
  )
}

