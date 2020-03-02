import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginCard extends React.Component {
    onSubmit = formValues => {
        console.log(formValues);
        this.props.formSubmit(formValues);
    }

    renderField = ({ input, type, label, meta }) => {
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input {...input} type={type} className="form-control" id={input.name} placeholder={label} />
                {meta.touched && meta.error && <div className="alert alert-danger" role="alert">{meta.error}</div>}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="userId" component={this.renderField} type="text" label="Enter Email or Number " />
                    <Field name="passwordLogin" component={this.renderField} type="password" label="Enter Password" />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    {this.props.auth && this.props.auth.error && <div className="alert alert-danger" role="alert">{this.props.auth.error}</div>}
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.userId) errors.userId = 'Email or Number must be provided';
    else if(formValues.userId.length<8) errors.userId = 'Email or Number is inValid';

    if(!formValues.passwordLogin) errors.passwordLogin = 'Password must be provided';
    else if(formValues.passwordLogin.length<8) errors.passwordLogin = 'Password must be atleast 8 char long';

    return errors;
}

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginCard);
