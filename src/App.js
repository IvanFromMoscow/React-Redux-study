import React from 'react';
import Likes from './components/likes';
import './App.css';
import Title from './components/title';
import Comments from './components/comments';
import Loader from './components/loader';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Loader />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title></Title>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
