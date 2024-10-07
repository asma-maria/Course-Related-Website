
import { EnrolCourse } from '../EnrolCourse'

import Navbar from '../Navbar/Navbar'
import HowWorks from './HowWorks'
import { CourseImage } from './CourseImage'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Footer from './Footer'


export default function Home() {
  return (
    <div className='mx-auto container'>
 
    <Navbar></Navbar> 
    <EnrolCourse></EnrolCourse>
   
    <div className='flex flex-col gap-6'>
        <div>
            <div
  className="hero mx-auto bg=base-300 "
  style={{
    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
  </div>
  </div>
        <div >
           <HowWorks></HowWorks>

        </div>
        <div >
            <CourseImage> </CourseImage>
        </div>
        <div >
            <ContactUs></ContactUs>
        </div>
        <div >
            <AboutUs></AboutUs>
        </div>

        <div>
          <Footer></Footer>
        </div>
    </div>
        
    </div>
  )
}
