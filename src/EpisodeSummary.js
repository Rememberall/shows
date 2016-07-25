import React from 'react';

export default ({title, director, description, imageUrl}) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    border: '1px solid orange',
    height: '20em',
    width: '40em',
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: '100%',
  }}>
    <h2 style={{
      color: 'white',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    }}>
      {title}
    </h2>
    <p style={{
      color: 'lightgray',
      fontStyle: 'italic',
    }}>
      Directed by {director}
    </p>
    <div style={{
      display: 'flex',
      height: '100%',
      backgroundColor: 'rgba(200, 200, 200, 0.25)'
    }}>
      <p style={{
        alignSelf: 'flex-end',
        color: 'white',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
      }}>
        {description}
      </p>
    </div>
  </div>
);
