import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'

const Navigation = () => {
  return (
    <nav className='p-5  flex flex-row gap-5 justify-between w-[100%] fixed top-0'>
        <div> <span className='text-[40px]'>R</span> News </div>

        <div className='flex flex-row gap-5 items-center justify-center'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Trending'}>Trending</Link>
            <Link to={'/Business'}>Business</Link>
            <Link to={'/signin'}>
                <Button text="SignIn"></Button>
            </Link>
        </div>
    </nav>
  )
}

export default Navigation