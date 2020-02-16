import React, { Component } from 'react';

import ContactForm from '../contact-form/ContactForm';
import ContactIcons from '../contact-icons/ContactIcons';

import './Contact.css';

class Contact extends Component  {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            responseMessage: {
                success: '',
                message: ''
             }

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.responseMessage.success !== '' ){
            window.setTimeout(  () => {

               this.setState({           responseMessage: {
                success: '',
                message: ''
            }})} ,5000)

        }
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, email, message } = this.state;
        fetch('https://thawing-ocean-91778.herokuapp.com/message', {
            method: 'post',
            headers:{"Content-Type": 'application/json', 'Requested-With': 'XMLHttpRequest'},
			body: JSON.stringify({ name, from: email, message	})
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if(data.Error || !data.accepted) {
                this.setState({responseMessage: {
                    success: false,
                   message: 'An Error Has Been Occured'}
                })
            } else  {
                this.setState({responseMessage: {
                    success: true,
                   message: 'Your Message Has Been Sent Successfully'}})
            }
        })
    }



    render() {
        const { responseMessage } = this.state;
        let style;
        if(responseMessage.success) {
            style= { 
                width: '350px',
                color: '#28a745',
                border: '2px solid #28a745',
                height: '25px',
                background: '#cdf2d5',
                borderRadius: '5px'

             }
        } else {
            style= { 
                width: '350px',
                color: '#dc3545',
                border: '2px solid #dc3545',
                height: '25px',
                background: '#ffced2',
                borderRadius: '5px'

             }
        }
        return(
            <div id='contact'>
                <div id='n3'></div>
                <h1 data-aos="fade-left">CONTACT</h1>
                <div className='border' data-aos="fade-right"></div>
                {
                    responseMessage.message.length ?
                        <div style={style}>{responseMessage.message}</div>
                    : null
                
                }
                <ContactForm  onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                <ContactIcons />           
            </div>
        )
    }
}

export default Contact;