import React from 'react';

import SearchForm from './SearchForm';

export default ({titles, currentShow, onSelectShow}) => (
  <nav className="navbar navbar-fixed-top navbar-light"
    style={{
      backgroundColor: 'red',
    }}>
    <div className="container">
      <ul className="nav navbar-nav">
        <a className="navbar-brand" href="#">{currentShow.title}</a>
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <SearchForm titles={titles}
        onSubmit={onSelectShow}/>
    </div>
  </nav>
);
