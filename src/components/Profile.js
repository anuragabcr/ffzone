import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="card" style={{padding:20,margin:20}}>
                <div className="alert alert-success btn" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-success btn" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-success btn" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-success btn" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-success btn" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-success btn" role="alert" onClick={() => this.props.logoutUser()}>
                    Log Out Profile
                </div>
            </div>
        );
    }
}

export default Profile;
