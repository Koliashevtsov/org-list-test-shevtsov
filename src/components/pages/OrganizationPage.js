import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './organization-page.css';

import UserItem from '../user-item/UserItem';

class OrganizationPage extends React.Component {
  state = {
    usersList: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/orgs/${this.props.orgItem.name}/members`)
    .then((result) => {
      this.setState({
        usersList: result.data
      });
    }
    )
    .catch(error => {
      console.log(error);
    })
  }


  render(){
    const { orgItem, fromUser} = this.props;
    const list = this.state.usersList;

    return (
      <div className="content">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{orgItem.name}</h1>
            <p className="lead">{orgItem.description}</p>
            <p className="location">{orgItem.location}</p>
          </div>
        </div>
        <div className="users-list-cont">
          <h2 className="header">Our Employees</h2>
          <table className="table">
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <UserItem item={item} onUser={fromUser}/>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}
OrganizationPage.propTypes = {
  item: PropTypes.array,
  index: PropTypes.number
}

export default OrganizationPage;
