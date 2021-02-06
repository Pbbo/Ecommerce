import React, { Component } from 'react';

import SignUpForm from './signupForm.js';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sing-up'>
                <SignInForm onSubmit={this.onSubmit} className='sing-up__form' />
            </div>
        )
    }
}

export default SignUp;