import React from 'react'

const BoldPartStr = ({user, markup, id}) => {
    const text = user.split(markup);
    return (
      <span>
        {text.map((item, index) => (
          <>
            {item}
            {index !== text.length - 1 && (
              <b>{markup}</b>
            )}
          </>
        ))}
      </span>
  );
}

export default BoldPartStr;
