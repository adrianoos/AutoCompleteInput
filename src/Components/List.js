import React from 'react';
import {useSelector} from 'react-redux';

const List = ({markup}) => {

const reduxState = useSelector(state => state)

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
        { reduxState.filteredUsers && reduxState.input ?
          <ul id='UserNameList'>
          {reduxState.filteredUsers.map((user) => {
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
