import React from 'react';
import { connect } from 'react-redux';

import AdminProfile from '../components/AdminProfile';
import Profile from '../components/Profile';
import Authenticate from '../components/Authenticate';
import { logout } from '../actions';

class ProfilePage extends React.Component {
    componentDidMount() {
    }

    logoutUser = () => {
        this.props.logout();
    }

    render() {
        if(localStorage.getItem('admin') && JSON.parse(localStorage.getItem('admin')).status) {
            return (
                <AdminProfile logoutUser={this.logoutUser} />
            );
        }else if(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).status) {
            return (
                <Profile logoutUser={this.logoutUser} />
            );
        }else {
            return (
                <Authenticate />
            );
        }
    }
}

export default connect(null, { logout })(ProfilePage);