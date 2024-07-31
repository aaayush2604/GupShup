import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const {loading, login}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(username,password);
    }

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-2xl  sm:text-3xl font-semibold text-center text-gray-800'>Login
                <span className='text-blue-700'>GupShup</span>
            </h1>

            <form className='w-full' onSubmit={handleSubmit}>
                <label className='label p-2'>
                <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type='text' placeholder='Enter your Username' className='w-full input input-bordered h-10' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <label className='label p-2'>
                <span className='text-base label-text text-white '>Password</span>
                </label>
                <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <Link to="/signup" className='text-sm text-white hover:underline hover:text-blue-600 mt-5 w-full text-center'>
                    Don't Have an Account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-blue-700' disabled={loading} type='submit'>
                        {loading? <span className='loading loading-spinner'></span>:"Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
