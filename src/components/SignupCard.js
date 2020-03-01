import React from 'react';

class SignupCard extends React.Component {
    state = { name: '', email: '', number: '', password: '', rePassword: '', valid: false };

    handleInput(e) {
        switch (e.type) {
            case 'name':
                this.setState({ name: e.value });
                break;
            case 'email':
                this.setState({ email: e.value });
                break;
            case 'number':
                this.setState({ number: e.value });
                break;
            case 'password':
                this.setState({ password: e.value });
                break;
            case 'rePassword':
                this.setState({ rePassword: e.value });
                break;
            default:
                this.setState({ number: e.value });
        }

        if(this.state.name==='' || this.state.name<3) {
            console.log('name');
            this.setState({valid: false})
        }else if(this.state.email==='' || this.state.email<10) {
            console.log('email');
            this.setState({valid: false})
        }else if(this.state.number==='' || this.state.number<10) {
            console.log('num');
            this.setState({valid: false})
        }else if(this.state.password==='' || this.state.password<8) {
            console.log('pass');
            this.setState({valid: false})
        }else if(this.state.password !== this.state.rePassword) {
            console.log('pass2');
            this.setState({valid: false})
        }else {
            console.log('true');
            this.setState({valid:true});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.formSubmit({ name: this.state.name, email: this.state.email, number: this.state.number, password: this.state.password });
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
        console.log(this.state);
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={this.state.name}
                            onChange={e => this.handleInput({type: 'name', value:e.target.value})}    
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailS">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailS" 
                            aria-describedby="emailHelp" 
                            value={this.state.email}
                            onChange={e => this.handleInput({type: 'email', value:e.target.value})}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="number" 
                            value={this.state.number}
                            onChange={e => this.handleInput({type: 'number', value:e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordS">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="passwordS" 
                            value={this.state.password}
                            onChange={e => this.handleInput({type: 'password', value:e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Re-Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="rePassword" 
                            value={this.state.rePassword}
                            onChange={e => this.handleInput({type: 'rePassword', value:e.target.value})}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={!this.state.valid} className="btn btn-primary">Submit</button>
                    </div>
                    {this.displayError()}
                </form>
            </div>
        );
    }
}

export default SignupCard;
