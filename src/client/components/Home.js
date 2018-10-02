import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am the best home component</div>
      <button onClick={() => console.log('Hello world')}>Log to Console</button>
    </div>
  );
};

export default Home;
