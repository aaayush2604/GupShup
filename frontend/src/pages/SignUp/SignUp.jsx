import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp.jsx';


const SignUp =() => {

  const [inputs,setInputs]=useState(
    {
      fullName:'',
      username:'',
      password:'',
      confirmPassword:'',
      gender:''
    }
  )

  const {signup,loading}=useSignUp();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(inputs);
    await signup(inputs); 
  }

  const handleCheckBoxChange=(gender)=>{
    setInputs({...inputs,gender})
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto w-5/6 sm:w-[35%]'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-2xl  sm:text-3xl font-semibold text-center text-gray-800'>SignUp
            <span className='text-blue-700'>GupShup</span>
        </h1>

        <form className='w-full' onSubmit={handleSubmit}>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Name</span>
                </label>
                <input type='text' placeholder='Enter your Name' className='w-full input input-bordered h-10'
                  value={inputs.fullName}
                  onChange={(e)=>{setInputs({...inputs,fullName:e.target.value})}}
                />
                <label className='label p-2'>
                <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type='text' placeholder='Enter your Username' className='w-full input input-bordered h-10'
                  value={inputs.username}
                  onChange={(e)=>{setInputs({...inputs,username:e.target.value})}}
                />
                <label className='label p-2'>
                <span className='text-base label-text text-white '>Password</span>
                </label>
                <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10'
                  value={inputs.password}
                  onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}
                />
                <label className='label p-2'>
                <span className='text-base label-text text-white '>Confirm Password</span>
                </label>
                <input type='password' placeholder='Enter your Password Again' className='w-full input input-bordered h-10 '
                  value={inputs.confirmPassword}
                  onChange={(e)=>{setInputs({...inputs,confirmPassword:e.target.value})}}
                />

                <GenderCheckBox className='p-2 mt-2' onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

                <Link to="/login" className='text-sm text-white hover:underline hover:text-blue-600 mt-5 w-full text-center'>
                Already Have an Account?
                </Link>
                
                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-blue-700' disabled={loading}>
                    {loading? <span className='loading loading-spinner'></span>:"SignUp"}
                    </button>
                </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
