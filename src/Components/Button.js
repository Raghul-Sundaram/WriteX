import React from 'react'

const Button = ({text}) => {
  return (
    <button type='submit' className='h-[30px] w-[100px] bg-white rounded-xl text-black'>
{text}
    </button>
  )
}

export default Button