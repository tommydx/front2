import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import Nav from './Nav';
import ViewAllGearPage from './ViewAllGearPage';
import Footer from './Footer';

class UserHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gear:[]
    };
  }

 // GET request to API for user's gear data
  componentDidMount() {
    console.log('inside component did mount')
    axios
    .get(`http://localhost:8080/users/${this.props.params.user_id}/gear`,{
      // TOKEN is placed inside a HEADER so that it is not visible
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data.gear;
      // console.log('data received -> ',response.data.gear);
      this.setState({
        gear: response.data.gear
      });
      // console.log('state set to: -> ',this.state.gear);
    })
    .catch((err) => {
      console.log(err);
    });
  }

// ViewAllGearPage receives a prop called "gear" that takes the state of gear populated with the gear Objects from the database passed down from this UserHomePage to the View page
  render() {
    return (
      <div>
        <Nav userId={this.props.params.user_id} />
        <div className=''>
          <div className=''>
            <div className=''>

              <div>
                <h2>User Info</h2>
                <ViewAllGearPage gear={this.state.gear}/>

                <Link to={`/users/${window.localStorage.user_id}/gear/new`}>
                  <button type='button' className='create-new-gear-button button'>Create New</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default UserHomePage;
