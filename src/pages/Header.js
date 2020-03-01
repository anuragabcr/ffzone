import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home">
                        <b><i>FFZONE</i></b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/earn">Earn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/join">Join</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ongoing">Ongoing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/result">Result</Link>
                            </li>
                        </ul>
                        <div>
                            <Link className="btn btn-success" to="/profile">
                                <i className="fa fa-users fa-1x"> Profile</i> 
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
