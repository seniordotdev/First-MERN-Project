import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-around align-middle py-2 border my-2'>
            <h1>CRUD</h1>
            <Link to={"/add"}  aria-current="page">
                <button className='bg-blue-600 text-white p-2 rounded flex flex-row align-middle '>
                    <svg style={{width:"25px"}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                    Create new book
                </button>
            </Link>
        </nav>
    )
}

export default Navbar