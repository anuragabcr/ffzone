import React from 'react';

import history from '../history';

class AdminProfile extends React.Component {
    render() {
        return (
            <div className="card" style={{padding:20,margin:20}}>
                <div className="alert alert-success btn" role="alert">
                    Perform Admin Actions
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => history.push('/admin/create')}>
                    Create a new Match
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => history.push('/admin/update')}>
                    Update a Match
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => history.push('/admin/remove')}>
                    Remove a Match
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => history.push('/admin/result')}>
                    Upload Result
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => this.props.logoutUser()} >
                    Log Out
                </div>
            </div>
        );
    }
}

export default AdminProfile;
