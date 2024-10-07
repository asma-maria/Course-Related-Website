import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useLoaderData } from 'react-router-dom'
import CourseCard from './CourseCard';
import Footer from './Footer';

export const Courses = () => {
    const course =useLoaderData();
    console.log(course);
  return (
    <div>
        <Navbar></Navbar>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ' > 
           {
            course.map((data)=>(
                <CourseCard key={data._id} course={data}></CourseCard>
            ))
           }
        </div>
        <Footer></Footer>
    </div>
  )
}
