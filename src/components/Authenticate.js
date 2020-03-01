import React from 'react';
import { connect } from 'react-redux';

import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import { userLogin, userSignup } from '../actions';

class Authenticate extends React.Component {
    loginFormSubmit = (userData) => {
        this.props.userLogin(userData);
    }

    signupFormSubmit = (userData) => {
        this.props.userSignup(userData);
    }

    render() {
        return (
            <div className="card" style={{padding: 10, margin: 10}}>
                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        <LoginCard formSubmit={this.loginFormSubmit} auth={this.props.auth} />
                    </div>
                    <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                        <SignupCard formSubmit={this.signupFormSubmit} auth={this.props.auth} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth.user};
}

export default connect(mapStateToProps, { userLogin, userSignup })(Authenticate);
