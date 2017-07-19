import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router';

class ViewAllGearPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gear: []
    };
  }

//  GET request to API for user's places data
  componentDidMount() {
    axios
    .get(`http://localhost:8080/users/${this.props.userId}/gear`, {
      // headers: {
      //   'Authorization': window.localStorage.getItem('token')
      // }
    })
    .then((response) => {
      const gearData = response.data;

      this.setState({
        gear: gearData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  reloadViewAllGearPage() {
    axios
    .get(`http://localhost:8080/users/${this.props.userId}/gear`, {
      // headers: {
      //   'Authorization': window.localStorage.getItem('token')
      // }
    })
    .then((response) => {
      const gearData = response.data;

      this.setState({
        gear: gearData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  destroyGear(index, gearId) {
    if (confirm('Are you sure you want to remove this item?') === true){
      axios
      .delete(`http://localhost:8080/users/${this.props.userId}/gear/${gearId}`, {
        // headers: {
        //   'Authorization': window.localStorage.getItem('token')
        // }
      })
      .then(() => {
        this.state.gear.splice(index, 1);

        this.setState({
          gear: this.state.gear
        });
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      browserHistory.push(`/users/${this.props.params.user_id}/gear`);
    }
  }

  render() {
    return (
      <div className="">
        <h2>Gear</h2>
        <div>
          Show User's Gear
        </div>
      </div>
    );
  }
}

export default ViewAllGearPage;



// { this.state.gear.map((gear, index) => {
//   return (
//     <Gear
//     key={index}
//     gear={gear} destroyGear={this.destroyGear.bind(this, index, gear.id)}/>
//   }
// })}

// <div className="gear-view">
// <img src={ this.props.gear.photo_1 } />
// </div>
// <h1>{ this.props.gear.name }</h1>
// <div>
// { this.state.gear.map((gear, index) => {
//   if ((gear.user_id === this.props.params.user_id) && (place.visited)) {
//     return (
//       <PlaceCard
//       key={index}
//       place={place}/>
//     );
//   } else {
//     return
//   }
// })}
// </div>
