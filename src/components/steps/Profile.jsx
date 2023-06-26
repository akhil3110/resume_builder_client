
import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"


const Profile = () => {

  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Name
        </div>
        <div className="bg-white my-2 p-1 fles border-gray-200 rounded">
        <input type="text" 
          onChange={handleChange}
          value={userData["username"] || ''}
          name="username" 
          placeholder="Your Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring"
        />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          About
        </div>
        <div className="bg-white my-2 p-1 fles border-gray-200 rounded">
        <textarea type="text-box" 
          onChange={handleChange}
          value={userData["about"] || ''}
          name="about" 
          placeholder="About You"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring"
        />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          Email  
        </div>
        <div className="bg-white my-2 p-1 fles border-gray-200 rounded">
        <input type="email" 
          onChange={handleChange}
          value={userData["email"] || ''}
          name="email" 
          placeholder="Email"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring"
        />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          LinkedIn     <i class="fa-brands fa-linkedin  fa-lg" style={{color: "#0072b1",}}></i>
        </div>
        <div className="bg-white my-2 p-1 fles border-gray-200 rounded">
        <input type="text" 
          onChange={handleChange}
          value={userData["linkedIn"] || ''}
          name="linkedIn" 
          placeholder="LinkedIn"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring"
        />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          GitHub   <i class="fa-brands fa-github fa-lg" style={{color: "#000000",}}></i>
        </div>
        <div className="bg-white my-2 p-1 fles border-gray-200 rounded">
        <input type="text" 
          onChange={handleChange}
          value={userData["github"] || ''}
          name="github" 
          placeholder="GitHub"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring"
        />
        </div>
      </div>
    </div>
  )
}

export default Profile
