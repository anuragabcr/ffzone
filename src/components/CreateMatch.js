import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createMatch } from '../actions/admin';

class CreateMatch extends React.Component {
    state = {imgPreview: null, imgFile: null};

    previewImage = (event) => {
        this.setState({ imgPreview: URL.createObjectURL(event.target.files[0]) });
        this.setState({imgFile: event.target.files[0]});
    }

    onSubmit = (formValues) => {
        if(this.state.imgFile) {
            this.props.createMatch({...formValues, imgFile: this.state.imgFile});
        }else {
            alert('Select a image');
        }
    }

    renderField = ({ input, type, label, meta }) => {
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
            <div className="card" style={{ padding: 10, margin: 10 }}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" component={this.renderField} type="text" label="Enter Match name: " />
                    <div className="row">
                        <div className="col-md-3">
                            <Field name="max" component={this.renderField} type="number" label="Max no. of player: " />
                        </div>
                        <div className="col-md-3">
                            <Field name="prize" component={this.renderField} type="number" label="Win Prize: " />
                        </div>
                        <div className="col-md-3">
                            <Field name="kill" component={this.renderField} type="number" label="Per Kill: " />
                        </div>
                        <div className="col-md-3">
                            <Field name="type" component={this.renderField} type="text" label="Game Type: " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Field name="version" component={this.renderField} type="text" label="Version: " />
                        </div>
                        <div className="col-md-3">
                            <Field name="map" component={this.renderField} type="text" label="Map type: " />
                        </div>
                        <div className="col-md-3">
                            <Field name="fee" component={this.renderField} type="text" label="Entry Fee: " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <Field name="start" component={this.renderField} type="datetime-local" label="Game Time: " />
                        </div>
                        <div className="col-md-3">
                            <button
                                className="btn btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('selectFile').click()
                                }
                                }
                            >
                                Select Image
                            </button>
                            <input type="file" style={{ visibility: "hidden" }} onChange={this.previewImage} id="selectFile" />
                        </div>
                        <div className="col-md-4">
                            {this.state.imgPreview ? <img src={this.state.imgPreview} alt="preview" style={{ height: 150, width: 200 }} /> : null}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Create a Match</button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {}

    if(!formValues.name) errors.name = 'Name field is required';
    if(!formValues.max) errors.max = 'required';
    if(!formValues.prize) errors.prize = 'required';
    if(!formValues.kill) errors.kill = 'required';
    if(!formValues.type) errors.type = 'required';
    if(!formValues.version) errors.version = 'required';
    if(!formValues.map) errors.map = 'required';
    if(!formValues.fee) errors.fee = 'required';
    if(!formValues.start) errors.start = 'required';

    return errors;
}

export default reduxForm({
    form: 'createMatch',
    validate
})(connect(null, { createMatch })(CreateMatch));