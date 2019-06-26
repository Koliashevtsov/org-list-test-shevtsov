import React from 'react';
import PropTypes from 'prop-types';

import './fol-item.css'

import Avatar from '../user-item/Avatar';

function FolItem(props) {
  const { item } = props;
  return (
    <li>
      <div className="fol-avatar">
        <Avatar user={item}/>
      </div>
      <span className="fol-name">
        {item.login}
      </span>
    </li>
  );
}
FolItem.propTypes = {
  item: PropTypes.object
}


export default FolItem;
