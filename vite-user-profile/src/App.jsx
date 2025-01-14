import React from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  const user = {
    userImage: 'https://avatars.githubusercontent.com/u/62465404?v=4',
    name: 'Daniel Becerra (enoobis)',
    email: 'enoobis@vk.com',
    bio: 'Software developer with a passion for building great web applications.',
  };

  return (
  <div className="container mt-5">
      <h1 className="text-center mb-4">User Profile App</h1>
      <div  className="d-flex justify-content-center">
        <UserProfile {...user} />
      </div>
    </div>
  );
};

export default App;
