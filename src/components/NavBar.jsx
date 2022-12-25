import React from 'react'

function NavBar() {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-black text-gray-300'>
        
        {/*LOGO*/}
        <div>
            <a href="/" className='text-3xl'>
              Papu Books
            </a>
        </div>

        {/*Buttons Nav Bar*/}
        <ul className='hidden md:flex'>
            <li>  
                Contact   
            </li>
        </ul>

        {/*Color change*/}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-2px] duration-300 bg-black'>
              <a href="/" 
                className='flex justify-between items-center text-xl w-full text-white'>
                Dark Mode
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar