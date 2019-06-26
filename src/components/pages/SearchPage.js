import React from 'react';
import PropTypes from 'prop-types';


import Form from '../form/Form';
import OrganizationItem from '../org-item/OrganizationItem';

import './search-page.css';



function SearchPage(props) {
  const { orgList, onGetListOrg} = props
  return (
    <div className="content">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">This is organization info</p>
        </div>
      </div>
      <Form onFormName={onGetListOrg}/>
      <div className="organizations-list">
        {orgList.map(item => (
          <ul className="list-group" key={item.id}>
            <OrganizationItem  item={item} />
          </ul>
        ))}
      </div>
    </div>
  )
}
SearchPage.propTypes = {
  orgList: PropTypes.array,
  onGetListOrg: PropTypes.func
}

export default SearchPage;
