import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupCard extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.formSubmit(formValues);
    }

    renderField = ({ input, label, type, meta }) => {
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input {...input} type={type} className="form-control" id={input.name} placeholder={input.name} />
                {meta.touched && meta.error && <div className="alert alert-danger" role="alert">{meta.error}</div>}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" component={this.renderField} type="text" label="Enter Name :" />
                    <Field name="email" component={this.renderField} type="email" label="Enter Email :" />
                    <Field name="number" component={this.renderField} type="number" label="Enter Number :" />
                    <Field name="password" component={this.renderField} type="password" label="Enter Password :" />
                    <Field name="rePassword" component={this.renderField} type="password" label="Enter Re-password :" />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {this.props.auth && this.props.auth.error && <div className="alert alert-danger" role="alert">{this.props.auth.error}</div>}
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.name) errors.name = 'Name is required';
    else if(formValues.name.length < 3) errors.name = 'Name must be 3 char long';

    if(!formValues.email) errors.email = 'Email is required';
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) errors.email = 'Email is inValid';
    
    if(!formValues.number) errors.number = 'Number is required';
    else if(formValues.number.length < 10) errors.number = 'Number must be 10 char long';
    
    if(!formValues.password) errors.password = 'Password is required';
    else if(formValues.password.length < 8) errors.password = 'Password must be 8 char long';
    
    if(!formValues.rePassword) errors.rePassword = 'Re-Password is required';
    else if(formValues.rePassword !== formValues.password) errors.rePassword = 'Password and Re_Password must be same';
    
    return errors;
}

export default reduxForm({ 
    form: 'signupForm',
    validate
})(SignupCard);
