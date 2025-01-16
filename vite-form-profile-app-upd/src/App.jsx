import React, { useState } from 'react';
import FormProfile from './components/FormProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    userImage: '',
    name: '',
    email: '',
    profession: ''
  });
// <---------------------------> //

  const [profiles, setProfiles] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

// <---------------------------> //

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfiles([...profiles, formData]);
    setFormData({ userImage: '', name: '', email: '', profession: '' });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center bg-success">vite-form-profile-app</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
        
          <input
            type="text"
            name="userImage"
            value={formData.userImage}
            onChange={handleChange}
            placeholder="-img-url-"
            className="form-control"
          />


        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="-name-"
            className="form-control"
          />
        </div>


        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="-email-"
            className="form-control"
          />
        </div>


        <div className="mb-3">
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="-profession-"
            className="form-control"
          />
        </div>


        <button type="submit" className="btn btn- success">add-profile</button>
      </form>
      <div className="profile-container d-flex flex-wrap gap-4">
        {profiles.map((profile, index) => (
          <FormProfile
            key={index}
            userImage={profile.userImage}
            name={profile.name}
            email={profile.email}
            profession={profile.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default App;