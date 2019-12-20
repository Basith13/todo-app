
import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        console.log('handlechange: ', value, name);
        this.setState({
          [name]: value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const data = await axios.post('http://localhost:3001/user', { ...this.state });
        console.log('data:', data);
        this.props.history.push('/sign-in')
    }

    renderSignUpForm() {
      return (
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                  or 
                  <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

        <div className="FormCenter">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">First Name </label>
            <input type="text" id="FirstName" className="FormField__Input" placeholder="Enter your FirstName" name="firstName" value={this.state.FirstName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Last Name </label>
            <input type="text" id="LastName" className="FormField__Input" placeholder="Enter your LastName" name="lastName" value={this.state.LastName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Mobile No </label>
            <input type="text" id="MobileNo" className="FormField__Input" placeholder="Enter your MobileNo" name="mobileNo" value={this.state.MobileNo} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="UserName">User Name</label>
            <input type="email" id="UserName" className="FormField__Input" placeholder="Enter your UserName" name="userName" value={this.state.UserName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
         

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>

          <div className="FormField">
              <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
      </div>
      </div>
      </div>
      );
    }

    render() {

        return (
            <Fragment>
              {
                this.renderSignUpForm()
              }
            </Fragment>
        );
    }
}
export default SignUpForm;