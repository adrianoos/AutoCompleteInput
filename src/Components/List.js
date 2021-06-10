import React from 'react'

const List = ({ filteredUsers, input, markup }) => {

    return (
        <>
        { filteredUsers && input ?
          <ul id='UserNameList'>
          {filteredUsers.map((user) => {
            return (
              <li key={user.id}>
                   <span>
                      <b>{user.username.slice(0, markup.length)}</b>
                           {user.username.slice(markup.length)}
                   </span>
              </li>
            );
          })}
        </ul> : ''
        }
      </>
    )
}

export default List;
