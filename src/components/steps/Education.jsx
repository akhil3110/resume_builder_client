import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"



const Education = () => {

  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }
  return (
    <div className="flex flex-col ">
      <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
        <div>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          College Name
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["collegeName"] || ''}
          name="collegeName" 
          placeholder="College Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        <div className="lg:w-3/4 sm:w-full md:w-full">
        <div className="flex flex-col sm:w-full md:w-full ">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Course Name
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["CourseName"] || ''}
          name="CourseName" 
          placeholder="Course Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          College Details
        </div>
        <textarea  
          onChange={handleChange}
          value={userData["CollegeDetails"] || ''}
          name="CollegeDetails" 
          placeholder="College Details"
          className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
        />
        </div>
        </div>
      </div>
      <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
        <div>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          School Name
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["schoolName"] || ''}
          name="schoolName" 
          placeholder="School Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        <div className="lg:w-3/4 sm:w-full md:w-full">
        <div className="flex flex-col sm:w-full md:w-full ">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Course Name
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["schoolCourseName"] || ''}
          name="schoolCourseName" 
          placeholder="Course Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          School Details
        </div>
        <textarea  
          onChange={handleChange}
          value={userData["SchoolDetails"] || ''}
          name="SchoolDetails" 
          placeholder="School Details"
          className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
        />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Education
