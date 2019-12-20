import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            formList:  [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    async handleSubmit() {
        console.log(this.state);
        const data = await axios.post('http://localhost:3001/feed', { ...this.state });
        this.setState({
            title: '',
            description: ''
        })
        this.handleGetFeed();
    }  
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    async componentWillMount() {
        this.handleGetFeed();
    }

    async handleGetFeed() {
        const { data } = await axios.get('http://localhost:3001/feed');
        console.log('data: ', data);
        this.setState({
            formList: data,
        })
    }

    async logout(e) {
        const token=sessionStorage.getItem('access_token');
        console.log('data');
        const { data } = await axios.get('http://localhost:3001/logout',{
            headers:{
                'authorization': `Bearer ${token}`
            }
        });
        this.props.history.push('sign-in');
        
    }

    renderFormList() {
        const { formList } = this.state;

        return formList.map(form => (
            <div className="formdesign">
                <div>Title : { form.title }</div>
                <div>Description: { form.description }</div>
            </div>
        ))
    }
    
    render() {
        return (
        <div className="FormCenter">
            <button className="bt" onClick={(e)=> this.logout(e)}>logout</button>
            <div className="tb"> 
                <input type ="text" className="box" name = "title" placeholder = "Enter Your Title"name="title" value={this.state.title} onChange={this.handleChange}></input>
                <input type ="text"  className="box" name = "description" placeholder = "Enter Your Description"name="description" value={this.state.description} onChange={this.handleChange}>

                </input>
                <button  className="btn" onClick={() => this.handleSubmit()}>Add </button>
            </div>
            <div className="form-box">
            {
                this.renderFormList()
            }
            </div>
        </div>
        );
}
   
  

}

export default Dashboard;