import React from 'react';
import { useSelector } from 'react-redux';

import Likes from './components/likes';
import './App.css';
import Title from './components/title';
import Comments from './components/comments';
import Loader from './components/loader';

function App() {
  const error = useSelector(state => state.errorReducer.error);
  return (
    <div className="App">
   
      <div className="wrap">
      {error && (
          <div className='error-message'> 
           {error}
          </div>
        )}
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
