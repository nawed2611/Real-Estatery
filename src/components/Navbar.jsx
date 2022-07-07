import React from 'react'

const Navbar = () => {
    return (
        <div className='flex z-10 bg-white border items-center border-b-1 justify-around w-full h-20'>

            <header className='flex items-center text-2xl'><svg className='m-1' id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" fill="#312ECB"></path> </svg><h1> Real Estatery</h1></header>

            <ul className='list-none'>
                <li className=''><a href="/">Home</a></li>
            </ul>
        </div>
    )
}

export default Navbar