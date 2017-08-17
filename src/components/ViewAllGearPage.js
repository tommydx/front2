import React, { Component } from 'react';
import axios from 'axios';
// import { Router } from 'react-router';
import { browserHistory } from 'react-router';

import { Link } from 'react-router';

class ViewAllGearPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gear: []
    };
    console.log("VIEW ALL G PROPS", props);
  }

  renderGear() {
    // console.log('inside render gear with: ', this.props.gear);
    // Using .map function here and returning a div with the chosen attributes of the object to be printed to the webpage - then returning the entire array of user's gear - similar to FOR loop
    let gear = this.props.gear.map((piece, i) => {
      let ok = window.localStorage.setItem("gear_id", '');
      console.log(ok);
      return(
        <div key={i} className="viewGearItem">
          <h3>{piece.name}</h3>
          <h4>{piece.item}</h4>
          <h4>{piece.year}</h4>
          <div className="viewGearPhoto">
            <img src={piece.photo_1} id="gearImg"></img>
          </div>

          <div className='edit-gear-button'>
            <Link to={`/users/${window.localStorage.getItem('user_id')}/gear/${piece.id}/edit`}>
              <button type='button' className='edit-gear-button button'>EDIT ITEM
              </button>
            </Link>
          </div>

          <button
          onClick={this.destroyGear}
          id={piece.id}
          >DELETE</button>
        </div>
      )
    })
    return gear;
  }
// event.target.id is pulling the gear id from the SQL server and so we are hiding id inside the click event of the button in order to destroy the gear - independent of state or props
  destroyGear(event) {
    // console.log(event.target.id)
    // search for index of gear(event.target.id)
    // grab userID from localstorage
    if (confirm('Delete this gear item?') === true){
      // console.log('delete gear', event.target.id);
      axios
      .delete(`http://localhost:8080/users/${window.localStorage.user_id}/gear/${event.target.id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      })
      .then(() => {
        // reload page or go to userpage*************
        // Router.dispatch(`users/`, null);
        this.props.getGear();
        browserHistory.push(`/users/${window.localStorage.user_id}`);
        // this.setState({
        //   gear: this.state.gear
        // });
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      browserHistory.push(`/users/${this.props.userId}/gear`);
    }
  }

// THIS.RENDERGEAR calls the rendergear function to print the specific user's gear to the page
  render() {
    return (
      <div className="viewGearContainer">
        <h2>Gear</h2>
        <div className="viewUserGear">
          {this.renderGear()}
        </div>
      </div>
    );
  }
}

export default ViewAllGearPage;
