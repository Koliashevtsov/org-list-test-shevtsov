import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './organization-item.css'

function OrganizationItem(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <li className="list-group-item"><Link to={`/organization/${item.id}/`}>{item.name}</Link></li>
    </React.Fragment>
  );
}
OrganizationItem.propTypes = {
  item: PropTypes.object
}
export default OrganizationItem;
