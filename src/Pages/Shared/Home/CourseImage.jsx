import React from 'react'
import {Link} from 'react-router-dom'

export const CourseImage = () => {
  return (
    <div>
        <div className="container mx-auto p-2 font-serif ">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400">
      <figure>
        <img src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Complete ReactJS</h2>
        <p className='font-serif' >Author:Bob Ziroll</p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400 ">
      <figure>
        <img src="https://live.staticflickr.com/65535/52412638962_12e932256a_o.png" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Javascript Pro</h2>
        <p>Author:Per Harald Borgen</p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400">
      <figure>
        <img src="https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Web Design & Development</h2>
        <p>Author:Kevin Powell</p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400">
      <figure>
        <img src="https://coderstrustbd.com/wp-content/uploads/2021/06/dgm-n.jpg" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Digital Marketing</h2>
        <p>Author: "Bob Ziroll"</p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400">
      <figure>
        <img src= "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/2b/6e5900607d11e7bf941ff25e8a1f15/tcpip.png?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">CCNA and Networking</h2>
        <p>Author: Aric Rindfleisch </p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="card bg-base-100 shadow-xl bg-cyan-400">
      <figure>
        <img src="https://coderstrustbd.com/wp-content/uploads/2021/06/GD.jpg" alt="Card Image 1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Graphics Design</h2>
        <p>Author:Mike Yao</p>
        <div className="card-actions justify-end">
          <Link to="/login"><button  className="btn btn-primary">Login To Enroll</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
