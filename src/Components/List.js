import React from 'react'

const List = ({ filteredUsers, input }) => {
    return (
        <>
        { filteredUsers && input ?
          <ul id='UserNameList'>
          {filteredUsers.map((user, index) => {
            return (
              <li key={user.id}>
                {user.username}
              </li>
            );
          })}
        </ul> : ''
    }
      </>
    )
}

export default List;
