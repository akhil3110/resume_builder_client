import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"



const Projects = () => {

  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }

  return (
    <div>
       <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
        <div>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Project Title 
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["projectTitle"] || ''}
          name="projectTitle" 
          placeholder="Project Title"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        <div className="lg:w-3/4 sm:w-full md:w-full">
        <div className="flex flex-col sm:w-full md:w-full ">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Project Descripton
        </div>
        <textarea  
          onChange={handleChange}
          value={userData["projectDescription"] || ''}
          name="projectDescription" 
          placeholder="Project Descripton"
          className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
           Tech Stack
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["role"] || ''}
          name="role" 
          placeholder="Role"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
           Link to Project
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["linkToProject"] || ''}
          name="linkToProject" 
          placeholder="Link to Project"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        </div>
      </div>  
      <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
        <div>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Project Title 
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["projectTitle1"] || ''}
          name="projectTitle1" 
          placeholder="Project Title"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        <div className="lg:w-3/4 sm:w-full md:w-full">
        <div className="flex flex-col sm:w-full md:w-full ">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Project Descripton
        </div>
        <textarea  
          onChange={handleChange}
          value={userData["projectDescription1"] || ''}
          name="projectDescription1" 
          placeholder="Project Descripton"
          className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
           Tech Stack
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["techStack1"] || ''}
          name="techStack1" 
          placeholder="Tech Stack"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
           Link to Project
        </div>
        <input type="text" 
          onChange={handleChange}
          value={userData["linkToProject2"] || ''}
          name="linkToProject2" 
          placeholder="Link to Project"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
        />
        </div>
        </div>
      </div>     
    </div>
  )
}

export default Projects
