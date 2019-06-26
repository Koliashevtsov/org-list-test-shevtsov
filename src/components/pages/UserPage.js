import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Avatar from '../user-item/Avatar';

import './user-page.css';


class UserPage extends React.Component {
  state = {
    userInfo: "",
    subscript: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.props.user.login}`)
    .then((result) => {
      this.setState({
        userInfo:  result.data
      });
      console.log(this.state.userInfo);
    })
    .catch(error => {
      console.log(error);
    })

    axios.get(this.props.user.subscriptions_url)
    .then((result) => {
      this.setState({
        subscript:  result.data
      });
      console.log(this.state.subscript);
    })
    .catch(error => {
      console.log(error);
    })
  }


  render(){
    const { user } = this.props;
    return (
      <Fragment>
      <div className="page-container">
        <div className="page-avatar">
          <Avatar user={user}/>
        </div>
        <div className="main-info">
          <p className="user-login">{user.login}</p>
          <p className="user-fullname">{this.state.userInfo.name}</p>
          <p className="user-company">{this.state.userInfo.company}</p>
          <p className="user-location">{this.state.userInfo.location}</p>
        </div>
      </div>
      <div className="main">
        <p className="description">All description on subscriptions</p>
        {this.state.subscript.map(item => (
          <ul className="list-group">
            <li className="list-group-item">{item.description}</li>
          </ul>
        ))}
      </div>
    </Fragment>
    )
  }
}
UserPage.propTypes = {
  user: PropTypes.object
}

export default UserPage;
