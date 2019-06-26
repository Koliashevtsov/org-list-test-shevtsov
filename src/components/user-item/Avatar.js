import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
  const { user } = props;
  var url = user.avatar_url;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
      />
  );
}
Avatar.propTypes = {
  user: PropTypes.object
}

export default Avatar;
