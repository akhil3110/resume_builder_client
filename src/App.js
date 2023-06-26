
import './App.css';

import SliderForm from './components/SliderForm';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import { StepperContext } from './contexts/StepperContext';
import Projects from './components/steps/Projects';
import Profile from './components/steps/Profile';
import Education from './components/steps/Education';
import Experience from './components/steps/Experience';
import Confirm from './components/steps/Confirm';
import { useState } from 'react';



function App() {

  const steps = [
    "Profile",
    "Education",
    "Experience",
    "projects",
    "Confirm"
  ];

  const displaySteps = (step) =>{
    switch (step){
      case 1 : return <Profile />;
      case 2 : return <Education />;
      case 3 : return <Experience />;
      case 4 : return <Projects />;
      case 5 : return <Confirm />;
      default : 
    }
  }

  const handleClick = (direction) =>{
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep>0 && newStep<=steps.length && setCurrentStep(newStep);
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  return (
    <>
     <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper */}
      <div className='container horizontal mt-5 '>
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />
      </div>
      {/* DIsplay APp Components */}
      <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}>
          {displaySteps(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation */}
      <div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
       />
      </div>
      
     </div>



    {/* <SliderForm />
    {/* <div className=" bg-gradient-to-b from-orange-200  to-orange-700">
    <Profile />
    </div> */} 
      
    </>
  );
}

export default App;
