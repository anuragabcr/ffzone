import React from 'react';

class LoginCard extends React.Component {
    state = { email: '', password: '', valid: false, emailError: '', passError: '' };

    handleInput(e) {
        if (e.type === 'email') {
            this.setState({ email: e.value });
        } else if (e.type === 'password') {
            this.setState({ password: e.value });
        }

        if (this.state.email === '' || this.state.email.length < 8) {
            this.setState({ valid: false });
            this.setState({ emailError: 'Email must be atleast 8 char' });
        } else if (this.state.password === '' || this.state.password.length < 8) {
            this.setState({ valid: false });
            this.setState({ passError: 'Passowrd must be atleast 8 char' });
        } else {
            this.setState({ valid: true });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.formSubmit({ email: this.state.email, password: this.state.password });
    }

    displayError() {
        if (!this.props.auth) return null;
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.auth.error}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={(e) => this.handleInput({ type: 'email', value: e.target.value })}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={this.state.password}
                            onChange={(e) => this.handleInput({ type: 'password', value: e.target.value })}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={!this.state.valid} className="btn btn-primary">Login</button>
                    </div>
                    {this.displayError()}
                </form>
            </div>
        );
    }
}

export default LoginCard;
