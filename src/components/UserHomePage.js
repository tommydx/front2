import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router';

import Nav from './Nav';
import Footer from './Footer';

class UserHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places:[]
    };
  }

//  GET request to API for user's gear data
  // componentDidMount() {
  //   axios
  //   .get(`https://been-there-done-that-api.herokuapp.com/users/${this.props.params.user_id}/locations`,{
        // TOKEN is placed inside a HEADER so that it is not visible
  //     headers: {
  //       'Authorization': window.localStorage.getItem('token')
  //     }
  //   })
  //   .then((response) => {
  //     const placesData = response.data;
  //     console.log(placesData);
  //     this.setState({
  //       places: placesData
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  render() {
    return (
      <div>
        <Nav userId={this.props.params.user_id} />
        <div className=''>
          <div className=''>
            <div className=''>

              <div>
                <h2>Gear</h2>
                <Link to={`/gear/${this.props.params.user_id}/gear/new`}>
                  <button type='button' className='create-new-button button'>Create New</button>
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
