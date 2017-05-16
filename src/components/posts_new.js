import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {createPost } from '../actions';
import {Field,reduxForm} from 'redux-form';

class PostNew extends Component {

    renderField(field) {
        const {meta:{touched,error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="PostContent"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={'/'} className="btn btn-danger">
                    CANCEL
                </Link>
            </form>
        );
    }
}

function validate(values) {
    const error = {};

    if (!values.title) {
        error.title = 'error title';
    }
    if (!values.categories) {
        error.categories = 'error categories';
    }
    if (!values.PostContent) {
        error.PostContent = 'error PostContent';
    }
    return error;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null,{createPost})(PostNew));