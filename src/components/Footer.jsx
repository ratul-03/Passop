import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-slate-800 text-white'>
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
        </div>
      <div className='flex justify-center items-center mt-2'>
        Created by <img src="public/img/heart.png" alt="" className='w-6 mx-2'/> with MD Arifin hasan Ratul
      </div>
    </footer>
  )
}

export default Footer