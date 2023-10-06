import React from 'react'
import Button from './Button'

const NewPost = () => {
    const publishPost = (event) => {
        
    } 
  return (
        <div className='m-[5%] w-[50%] flex flex-col gap-5 items-center justify-center'>
          <input className='text-black p-5 text-2xl rounded-lg' type='text' name='title' placeholder='Title here..' />
          <textarea className='text-black p-5 rounded-lg' name="newpost" placeholder='Write New Post Here...' rows={10} cols={100} />
          <Button text="Publish" onclick={publishPost} />
        </div>
  )
}

export default NewPost