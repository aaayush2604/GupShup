import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex w-full'>
        <div className="form-control">
        <label className='label gap-2 cursor-pointer'>
            <span className="label-text text-white">Male</span>
            <input type="checkbox" className='checkbox border-slate-900' name='gender'/>
        </label>
        </div>
        <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
            <span className="label-text text-white">Female</span>
            <input type="checkbox" className='checkbox border-slate-900' name='gender'/>
        </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox
