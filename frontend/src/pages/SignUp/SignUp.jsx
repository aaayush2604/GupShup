import React from 'react';
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto w-5/6 sm:w-[35%]'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-2xl  sm:text-3xl font-semibold text-center text-gray-800'>SignUp
            <span className='text-blue-700'>GupShup</span>
        </h1>

        <form className='w-full'>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Name</span>
                </label>
                <input type='text' placeholder='Enter your Name' className='w-full input input-bordered h-10'/>
                <label className='label p-2'>
                <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type='text' placeholder='Enter your Username' className='w-full input input-bordered h-10'/>
                <label className='label p-2'>
                <span className='text-base label-text text-white '>Password</span>
                </label>
                <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10'/>
                <label className='label p-2'>
                <span className='text-base label-text text-white '>Confirm Password</span>
                </label>
                <input type='password' placeholder='Enter your Password Again' className='w-full input input-bordered h-10'/>

                <GenderCheckBox className='p-2 mt-2'/>

                <a href="#" className='text-sm text-white hover:underline hover:text-blue-600 mt-5 w-full text-center'>
                Already Have an Account?
                </a>
                
                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-blue-700'>SignUp</button>
                </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
