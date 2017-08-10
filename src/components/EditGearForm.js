import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class EditGearForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      item_category: "",
      item: "",
      manufacturer: "",
      year: "",
      serial_number: "",
      condition: "",
      description: "",
      photo_1: "",
      photo_2: "",
      photo_3: "",
      user_id: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
    .get(`http://localhost:8080/users/${this.props.userId}/locations/${this.props.gearId}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data;
      this.setState(gearData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .put(`http://localhost:8080/users/${this.props.userId}/gear/${this.props.gearId}`, {
      gear: this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(() => {
      browserHistory.push(`/gear/${this.props.userId}/gear/${this.props.gearId}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div className=''>
        <div className='gear-photos'>
          <img src={`${this.state.photo_1}`} width='90px'/>
          <img src={`${this.state.photo_2}`} width='90px'/>
          <img src={`${this.state.photo_3}`} width='90px'/>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className='formLabel'>
              Name
            </div>
            <span>
              <input onChange={this.handleChange} name='name' type='text' value={this.state.name}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Item Category
            </div>
            <span>
              <input onChange={this.handleChange} name='item_category' type='text' value={this.state.item_category}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Item
            </div>
            <span>
              <input onChange={this.handleChange} name='item' type='text' value={this.state.item}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Manufacturer
            </div>
            <span>
              <input onChange={this.handleChange} name='manufacturer' type='text' value={this.state.manufacturer}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Year
            </div>
            <span>
              <input onChange={this.handleChange} name='year' type='text' value={this.state.year}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Serial Number
            </div>
            <span>
              <input onChange={this.handleChange} name='serial_number' type='text' value={this.state.serial_number}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Condition
            </div>
            <span>
              <input onChange={this.handleChange} name='condition' type='text' value={this.state.condition}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Description
            </div>
            <span>
              <input onChange={this.handleChange} name='description' type='text' value={this.state.description}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Add Photo
            </div>
            <span>
              <input onChange={this.handleChange} name='photo_1' type='text' placeholder='http://' value={this.state.photo_1}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
                Add Photo
            </div>
            <span>
              <input onChange={this.handleChange} name='photo_2' type='text' placeholder='http://' value={this.state.photo_2}/>
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Add Photo
            </div>
            <span>
              <input onChange={this.handleChange} name='photo_3' type='text' placeholder='http://' value={this.state.photo_3}/>
            </span>
          </div>

          <div className='hidden-ui'>
            <input onChange={this.handleChange} name='user_id' type='text' value={this.state.user_id} />
          </div>

          <div className=''>
            <button type='submit' className='edit-gear-button button'>Update Item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditGearForm;
