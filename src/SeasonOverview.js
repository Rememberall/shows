import React from 'react';

import EpisodeSummary from './EpisodeSummary';

export default ({episodes, currentEpisode, onSelectEpisode}) => (
  <div>
    <div style={{
    display: 'flex',
    flexDirection: 'row',
  }}>
      {episodes.map(({title, director, description}, index) => (
        <div key={index}
          style={{
            border: '1px solid red',
            padding: 15,
          }}>
          <a href="#" onClick={() => onSelectEpisode(index)}>
            {title}
          </a>
        </div>
      ))}
    </div>
    {currentEpisode
      ? <EpisodeSummary {...currentEpisode}/>
      : ''}
  </div>
);
