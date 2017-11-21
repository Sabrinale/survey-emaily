// Survey Form show a form to user toa add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS =[ 
    { label: 'Survey Title', name: 'title'},
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email body', name: 'body'},
    { label: 'Recipient List', name: 'emails'}
];

 class SurveyForm extends Component {
  renderFields(){
      return(
      <div>
          <Field type="text" 
          label="Survey title"
          name="title"component={SurveyField}/>
          <Field type="text" 
          label="Subject line"
          name="subject"component={SurveyField}/>
          <Field type="text" 
          label="Email body"
          name="body"component={SurveyField}/>
          <Field type="text" 
          label="Recipient List"
          name="emails"component={SurveyField}/>
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
            onSubmit= {this.props.handleSubmit(values => console.log(values))}
        > {this.renderFields()}
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({ 
    form: 'surveyForm'
})(SurveyForm);
