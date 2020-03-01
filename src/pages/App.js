import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import JoinPage from './JoinPage';
import OnGoingPage from './OnGoingPage';
import ProfilePage from './ProfilePage';
import ResultPage from './ResultPage';
import EarnPage from './EarnPage';
import AdminLoginPage from './AdminLoginPage';
import ModifyPage from './ModifyPage';
import history from '../history';
import './mainStyle.css';

class App extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="container">
                    <Router history={history}>
                        <div>
                            <Header />
                            <Route path='/' exact component={HomePage} />
                            <Route path='/home' exact component={HomePage} />
                            <Route path='/earn' exact component={EarnPage} />
                            <Route path='/join' exact component={JoinPage} />
                            <Route path='/ongoing' exact component={OnGoingPage} />
                            <Route path='/profile' exact component={ProfilePage} />
                            <Route path='/result' exact component={ResultPage} />
                            <Route path='/admin/login' exact component={AdminLoginPage} />
                            <Route path="/admin/:action" exact component={ModifyPage} />
                            <Footer />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;