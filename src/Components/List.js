import React from 'react'

const List = ({ filteredUsers, input, markup }) => {

const yes = (user) => {
    return (
        <b>{user.username.slice(0, markup.length)}</b>
    )
};

const no = (user) => {
    return (
        <span>{user.username.slice(0, markup.length)}</span>
    )
};

    return (
        <>
        { filteredUsers && input ?
          <ul id='UserNameList'>
          {filteredUsers.map((user) => {
            return (
              <li key={user.id}>
                   <span>
                       {user.username.includes(markup) ? yes(user) : no(user)}
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
