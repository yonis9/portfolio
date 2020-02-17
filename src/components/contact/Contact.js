import React, { Component } from 'react';

import ContactForm from '../contact-form/ContactForm';
import ContactIcons from '../contact-icons/ContactIcons';

import './Contact.css';
import Spinner from '../spinner/Spinner';

class Contact extends Component  {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            responseMessage: {
                success: '',
                message: '',
             },
            loading: false

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
        this.setState({ loading: true })
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
                this.setState({
                    responseMessage: {
                        success: false,
                        message: 'An Error Has Been Occured'
                    },
                    loading: false
                })
            } else  {
                this.setState({
                    responseMessage: {
                        success: true,
                        message: 'Your Message Has Been Sent Successfully'
                    },
                    loading: false
                })
            }
        })
    }



    render() {
        const { responseMessage, loading } = this.state;
         
        return(
            <div id='contact'>
              
                <div id='n3'></div>
                <h1 data-aos="fade-left">CONTACT</h1>
                <div className='border' data-aos="fade-right"></div>
                {   
                    loading ? <Spinner /> :
                    responseMessage.message.length ?
                        <div className={`${responseMessage.success ? 'success' : 'failure'}`}>
                            {responseMessage.message}
                        </div>
                    : null
                }
                <ContactForm  onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                <ContactIcons />           
            </div>
        )
    }
}

export default Contact;