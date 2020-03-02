import React from 'react';
import { connect } from 'react-redux'

import LoginCard from '../components/LoginCard';
import { adminLogin } from '../actions/auth';

class AdminLoginPage extends React.Component {
    componentDidMount() {
        
    }

    formSubmit = (userData) => {
        if(/.*\.com$/.test(userData.userId)) {
            this.props.adminLogin({email: userData.userId, password: userData.passwordLogin});
        }else {
            this.props.adminLogin({uid: userData.userId, password: userData.passwordLogin});
        }
    }

    render() {
        return (
            <div className="card" style={{margin:20}}>
                <div className="card-header"><b>Login as Administrator</b></div>
                <div className="card-body">
                    <LoginCard auth={this.props.auth} formSubmit={this.formSubmit} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {auth: state.auth.admin}
}

export default connect(mapStateToProps, { adminLogin })(AdminLoginPage);
