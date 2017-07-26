import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router';

class ViewAllGearPage extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    // this.state = {
    //   gear: []
    // };
  }

  renderGear() {
    console.log('inside render gear with: ', this.props.gear);
    // run through the loop
    let gear = this.props.gear.map((piece, i) => {
      return(
        <div key={i} className="viewGearItem">
          <h3>{piece.name}</h3>
          <h4>{piece.item}</h4>
          <h4>{piece.year}</h4>
          <div className="viewGearPhoto">{piece.photo}</div>
        </div>
      )
    })
    return gear;
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
