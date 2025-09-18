import React from "react"
import './index.css'

function UserCard({ user }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`

  return (
    <div className="user-card">
        <div> 
      <img src={avatarUrl} alt={user.username} className="avatar" />
      </div>
      <div>  
      <h2 className="user-name">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
      </div>
    </div>
  )
}

export default UserCard
