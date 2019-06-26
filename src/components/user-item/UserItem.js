import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import './user-item.css';

import Modal from '../modal/Modal'
import Avatar from './Avatar';


class UserItem extends React.Component {
  state = {
    isFollowers: false,
    isFollows: false,
    followersList: [],
    followsList: []
  }


  getFollows = () => {
    axios.get(`https://api.github.com/users/${this.props.item.login}/following`)
    .then((result) => {
      this.setState((state) => {
        return {
          followsList: result.data,
          isFollows: !this.state.isFollows
        };
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
  getFollowers = () => {
    axios.get(`https://api.github.com/users/${this.props.item.login}/followers`)
    .then((result) => {
      this.setState((state) => {
        return {
          followersList: result.data,
          isFollowers: !this.state.isFollowers
        };
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    const { item, onUser} = this.props
    return (
      <Fragment>
        <td>
          <span className="avatar">
            <Avatar user={item}/>
          </span>
        </td>
        <td className="link">
          <Link to={`/user/${item.id}/`} onClick={() => onUser(item)}>
            {item.login}
          </Link>
        </td>
        <td className="followers" onClick={this.getFollowers}>
            <p>Followers</p>
            <Modal item={item}
              isModal={this.state.isFollowers}
              isFollowers={this.state.isFollowers}
              followersList={this.state.followersList}/>
        </td>
        <td className="follows" onClick={this.getFollows}>
            <p>Follows</p>
            <Modal item={item}
              isModal={this.state.isFollows}
              isFollows={this.state.isFollows}
              followsList={this.state.followsList}/>
        </td>

      </Fragment>
    );
  }
}
UserItem.propTypes = {
  item: PropTypes.object,
  onUser: PropTypes.func
}

export default UserItem;
