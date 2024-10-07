import { Link } from "react-router-dom";


const CourseCard = ({course}) => {
    const {_id,title,img_url,ratings,author,author_img_url,duration,details}= course;
  return (
    <div>
        <div>
  {/* Grid Container with Three Columns */}
  
  <div className="relative flex flex-col justify-center text-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg ">
    <div className=" relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img className="object-none" src={img_url} />
    </div>
    <div className="p-4">
      <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
        Duration:{duration}
      </div>
      <h6 className="mb-2 text-slate-800 text-xl font-semibold">
       {title}
      </h6>
      <p className="text-slate-600 leading-normal font-light">
      {details.slice(0, 100)}{" "}
      <Link to={`/courses/${_id}`}
       className="text-blue-700 underline font-bold">Read More...</Link>
      </p>
    </div>
 
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          alt={author}
          src={author_img_url}
          className="relative inline-block h-8 w-8 rounded-full"
        />
        <div className="flex flex-col ml-3 text-sm">
          <span className="text-slate-800 font-semibold">{author}</span>
          <span className="text-slate-600">
            Ratings:{ratings}
          </span>
        </div>
      </div>
    </div>
  </div> 
</div>


    </div>
   
  )
}

export default CourseCard