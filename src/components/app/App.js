import React from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";
import './App.css';

import SearchPage from '../pages/SearchPage';
import OrganizationPage from '../pages/OrganizationPage';
import UserPage from '../pages/UserPage';




class App extends React.Component {

  state = {
    orgList: [],
    user: ""
  }


  onGetListOrg = (name) => {
    axios.get(`https://api.github.com/orgs/${name}`)
    .then((result) => {
      this.setState({
        orgList: [...this.state.orgList, result.data]
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  fromUser = (user) => {
    this.setState({
      user: user
    });
    console.log(user);
  }

  render(){
    return (

        <div className="App">
          <Route
            path='/'
            render={props => <SearchPage onGetListOrg={this.onGetListOrg} orgList={this.state.orgList}/>}
            exact
            />
          <Route
            path='/organization/:id'
            render={({ match }) => {
              const { id } = match.params;
              const obj = this.state.orgList.find((e) => (e.id == id))
              return <OrganizationPage itemId={ id } orgItem={ obj } fromUser={this.fromUser}/>
            }}/>

          <Route
            path='/user'
            render={props => <UserPage user={this.state.user}/>}
            />
        </div>

    );
  }
}

export default App;
