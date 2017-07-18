import React, { Component } from 'react';
// import axios from 'axios';
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

//  GET request to API for user's gear data
  // componentDidMount() {
  //   axios
  //   .get(`https://-api.herokuapp.com/users/${this.props.params.user_id}/gear`,{
        // TOKEN is placed inside a HEADER so that it is not visible
  //     headers: {
  //       'Authorization': window.localStorage.getItem('token')
  //     }
  //   })
  //   .then((response) => {
  //     const gearData = response.data;
  //     console.log(gearData);
  //     this.setState({
  //       gear: gearData
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
                <ViewAllGearPage />

                <Link to={`/users/${this.props.params.user_id}/gear/new`}>
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
