import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Experience = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form>
      <div className="flex flex-col ">
        <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
          <div>
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
              Company Name
            </div>
            <input
              type="text"
              onChange={handleChange}
              value={userData["companyName"] || ""}
              name="companyName"
              placeholder="Company Name"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
            />
          </div>
          <div className="lg:w-3/4 sm:w-full md:w-full">
            <div className="flex flex-col sm:w-full md:w-full ">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                Role
              </div>
              <input
                type="text"
                onChange={handleChange}
                value={userData["role"] || ""}
                name="role"
                placeholder="Role"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
              />
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                Details
              </div>
              <textarea
                onChange={handleChange}
                value={userData["RoleDeaitls"] || ""}
                name="RoleDeaitls"
                placeholder="Details"
                className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row justify-between sm:flex-col sm:gap-x-3 md:flex-col md:gap-x-3">
          <div>
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
              Company Name
            </div>
            <input
              type="text"
              onChange={handleChange}
              value={userData["companyName1"] || ""}
              name="companyName1"
              placeholder="Company Name"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
            />
          </div>
          <div className="lg:w-3/4 sm:w-full md:w-full">
            <div className="flex flex-col sm:w-full md:w-full ">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                Role
              </div>
              <input
                type="text"
                onChange={handleChange}
                value={userData["role1"] || ""}
                name="role1"
                placeholder="Role"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3"
              />
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                Details
              </div>
              <textarea
                onChange={handleChange}
                value={userData["RoleDeaitls1"] || ""}
                name="RoleDeaitls1"
                placeholder="Details"
                className="p-1  px-2 appearance-none outline-none w-full text-gray-800 bg-slate-100 rounded-lg  focus:outline-none focus:ring mt-3  h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Experience;
