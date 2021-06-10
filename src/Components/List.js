import React from 'react'
import BoldPartStr from './BoldPartStr'

const List = ({ filteredUsers, input, markup }) => {

    return (
        <>
        { filteredUsers && input ?
          <ul id='UserNameList'>
          {filteredUsers.map((user) => {
            return (
              <li key={user.id}>
                <BoldPartStr user={user.username} id={user.id} markup={markup}/>
              </li>
            );
          })}
        </ul> : ''
        }
      </>
    )
}

export default List;
