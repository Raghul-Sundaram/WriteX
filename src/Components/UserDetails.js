import React from 'react'

const UserDetails = ({profile,logOut} ) => {
     

  return (
    <div>
        <div>
          {console.log(profile.name)}
            <img src={profile.picture} alt='user image' />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
        </div>
    </div>
  )
}

export default UserDetails