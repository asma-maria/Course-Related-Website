import React from 'react'
import { useLoaderData,useParams,Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';



export const CourseDetails = () => {
 
    const courseDetails=useLoaderData();
    console.log(courseDetails);
    const { id } = useParams();
    console.log(id);
    const {title,img_url,ratings,author,duration,details,student,level,lession,price}= courseDetails;

  return (

  <div>
        <Navbar></Navbar>

      <div className='flex flex-col gap-4'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <img src={img_url} alt={title} />
        <div className='card-body justify-center'>
        <h1 className='card-title'> Course Name: {title}</h1>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Details about Course:</strong> {details}</p>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Lessions: </strong> {lession}</p>
        <p><strong>Ratings:</strong> {ratings}</p>
        <p><strong>Total Students:</strong> {student}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Course Fee:</strong> {price}/-</p>
        </div>

        </div>

    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
  )
}
