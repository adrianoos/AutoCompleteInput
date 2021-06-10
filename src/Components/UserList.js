import React from 'react'

const UserList = ({ input, filteredUsers }) => {

    return (
        <>
        { input ?
          <ul>
            {filteredUsers.map((user) => <li key={user.id}>{user.username}</li>)}
          </ul> : '' }
        </>
    )
}

export default UserList;
