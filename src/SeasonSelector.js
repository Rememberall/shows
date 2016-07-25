import React from 'react';

export default ({seasons, onSelectSeason}) => (
  <div style={{
    padding: 10,
    borderRight: '2px solid hotpink',
    borderRadius: 5,
  }}>
    {seasons.map(({name}, index) => (
      <div key={index}
        style={{
          marginTop: 5,
          marginBottom: 5
        }}>
        <hr/>
        <a href="#" onClick={() => onSelectSeason(index)}>
          {name}
        </a>
      </div>
    ))}
    <hr/>
  </div>
);
