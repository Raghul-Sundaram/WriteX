import React from 'react'
import Button from './Button'
import UserPosts from './UserPosts'
import NewPost from './NewPost'

const UserDetails = ({ profile, logOut }) => {


  return (
    <div>
      <div className='w-[90%] grid grid-cols-4 gap-10 items-center justify-center'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <img className='h-[200px] w-[200px] rounded-full' src={profile.picture} alt='user image' />
          <p className='font-bold text-4xl'>{profile.name}</p>
          <p className='text-xl opacity-50'> {profile.email}</p>
          <Button text="LogOut" onClick={logOut} />
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='font-bold text-2xl '>Total Posts</p>
          <p className='text-6xl opacity-50'>200</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='font-bold text-2xl '>Followers</p>
          <p className='text-6xl opacity-50'>145</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='font-bold text-2xl '>Impressions</p>
          <p className='text-6xl opacity-50'>34k</p>
        </div>
      </div>
      <div className='flex flex-row gap-5 items-start justify-start '>
        <NewPost />
        <UserPosts />
      </div>
    </div>
  )
}

export default UserDetails