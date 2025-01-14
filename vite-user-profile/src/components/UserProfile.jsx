import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ userImage, name, email, bio }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Left Item: User Image */}
      <div className="me-3">
        <img
          src={userImage}
          alt={`${name}'s profile`}
          className="img-fluid rounded-circle"
          style={{ width: '150px', height: '150px', objectFit: 'cover', textAlign: 'center'}}
        />
      </div>

      {/* Right Item: User Details */}
      <div   className="card border-2 justify-content-center">
        <h3  className="text-primary mb-2">{name}</h3>
        <p   className="mb-1 text-muted"><strong>Email:</strong> {email}</p>
        <p   className="mb-0 text-secondary"><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  userImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
