import React, { Component } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        console.log(prevState);
        console.log(this.state)
        if(this.state.responseMessage.success !== '' ){
            window.setTimeout(  () => {

               this.setState({           responseMessage: {
                success: '',
                message: ''
            }})} ,5000)

        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onMessageChange = (e) => {
        this.setState({message: e.target.value})
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
            if(data.Error || !data.accepted.length) {
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
                <form id='send-message' data-aos="zoom-in-up" onSubmit={this.onSubmit}>
                    <input onChange={this.onNameChange} type='text' placeholder='Name' required />
                    <input onChange={this.onEmailChange}type='email' placeholder='Email' required/>
                    <textarea onChange={this.onMessageChange} rows="10" cols="50" placeholder='Your Message' required>
                    </textarea>
                    <button type='submit'>SUBMIT</button>

                </form>


                <div className='icon-container'>
                    <a href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer"><div className='icon-social'>
                        <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
                    </div> </a>
                    <a href='https://www.linkedin.com/in/yonisisso/' target='_blank' rel="noopener noreferrer">  <div className='icon-social'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/>
                    </div></a>
                </div>
                <p>Made By <span>Yoni Sisso</span>  ©2019</p>
            
                
            </div>
        )
    }
}

export default Contact;