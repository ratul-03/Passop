import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
            <li className='flex gap-6'>
                <a href="#" className='hover:font-bold transition-all duration-700'>Home</a>
                <a href="#" className='hover:font-bold transition-all duration-700'>About</a>
                <a href="#" className='hover:font-bold transition-all duration-700'>Service</a>
                <a href="#" className='hover:font-bold transition-all duration-700'>Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-700 my-5 rounded-full flex items-center'>
          <img className='invert w-10 p-1' src="public/img/github.svg" alt="" />
          <span className='font-bold px-2'>Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar