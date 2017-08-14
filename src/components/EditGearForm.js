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
    .get(`http://localhost:8080/users/${window.localStorage.user_id}/gear/${this.props.gear_id}`, {
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
  // VALUE MUST BE EQUAL TO THE STATE OF THE COMPONENT YOU ARE IN WHEN TAKING DATA FROM INPUT FIELDS (HOISTED STATE) ---- CAN NOT DO THIS WITH PROPS - USE PLACEHOLDER

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div className='edit-gear-form-contain'>

        <div className='edit-gear-form-inputs'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <div className='formLabel'>
                Name
              </div>
              <span>
                <input onChange={this.handleChange} name='name' type='text' placeholder={this.props.gearData.name}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Item Category
              </div>
              <span>
                <input onChange={this.handleChange} name='item_category' type='text' placeholder={this.props.gearData.item_category}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Item
              </div>
              <span>
                <input onChange={this.handleChange} name='item' type='text' placeholder={this.props.gearData.item}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Manufacturer
              </div>
              <span>
                <input onChange={this.handleChange} name='manufacturer' type='text' placeholder={this.props.gearData.manufacturer}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Year
              </div>
              <span>
                <input onChange={this.handleChange} name='year' type='text' placeholder={this.props.gearData.year}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Serial Number
              </div>
              <span>
                <input onChange={this.handleChange} name='serial_number' type='text' placeholder={this.props.gearData.serial_number}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Condition
              </div>
              <span>
                <input onChange={this.handleChange} name='condition' type='text' placeholder={this.props.gearData.condition}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Description
              </div>
              <span>
                <input onChange={this.handleChange} name='description' type='text' placeholder={this.props.gearData.description}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Add Photo
              </div>
              <span>
                <input onChange={this.handleChange} name='photo_1' type='text' placeholder={this.props.gearData.photo_1}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                  Add Photo
              </div>
              <span>
                <input onChange={this.handleChange} name='photo_2' type='text' placeholder={this.props.gearData.photo_2}/>
              </span>
            </div>

            <div>
              <div className='formLabel'>
                Add Photo
              </div>
              <span>
                <input onChange={this.handleChange} name='photo_3' type='text' placeholder={this.props.gearData.photo_3}/>
              </span>
            </div>

            <div className='hidden-ui'>
              <input onChange={this.handleChange} name='user_id' type='text' placeholder={this.props.gearData.user_id} />
            </div>

            <div className=''>
              <button type='submit' className='edit-gear-button button'>Update Item</button>
            </div>
          </form>
        </div>

        <div className='gear-photos'>
          <img src={`${this.state.photo_1}`} width='100%'/>
          <img src={`${this.state.photo_2}`} width='100%'/>
          <img src={`${this.state.photo_3}`} width='100%'/>
        </div>
      </div>
    );
  }
}

export default EditGearForm;
