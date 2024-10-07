
import { EnrolCourse } from '../EnrolCourse'

import Navbar from '../Navbar/Navbar'
import HowWorks from './HowWorks'
import { CourseImage } from './CourseImage'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Footer from './Footer'
import CourseBanner from './CourseBanner'


export default function Home() {
  return (
    <div className='mx-auto container'>
 
    <Navbar></Navbar> 
    <EnrolCourse></EnrolCourse>
   
    <div className='flex flex-col gap-6'>
      <CourseBanner></CourseBanner>
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
