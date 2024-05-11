import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate();
    function handleNurseClick(){
        navigate('/nurse/registration',{});
    }
  return (<>
    <div className='flex w-[100vw] justify-center items-center text-3xl'>YOU ARE?</div>
    <div className='flex w-[100%] justify-center items-center'>

      <div className='flex flex-col justify-center items-center w-[38%]'>
        <img className="w-[80%] m-6" src='/assets/patient.gif' alt='Patient Here'/>
        <Button  colorScheme='red'>Patient</Button>
      </div>

      <div className='flex flex-col justify-center items-center w-[38%]'>
      <img className="w-[90%]" src='/assets/nurse.gif' alt='Nurse Here'/>
      <Button colorScheme='gray' onClick={handleNurseClick}>Nurse</Button>
      </div>
    </div>
    </>)
}

export default Register
