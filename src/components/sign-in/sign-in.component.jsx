import React from 'react';
import './sign-in.component.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, logout } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSumbit = event => {

        event.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSumbit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} required label="email" />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="password" />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;