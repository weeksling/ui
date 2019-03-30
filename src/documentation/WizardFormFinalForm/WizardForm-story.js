/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'react-final-form';
import Wizard from './Wizard';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import Blockquote from '../../components/Blockquote';
import Wrapper from '../../components/Wrapper';
import RadioButton from '../../components/RadioButton/RadioButton';
import RegularPage from '../RegularPage';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span className="wfp--form-requirement">{error}</span>
  ) : (
    false
  );

storiesOf('Documentation|Samples', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .addDecorator(story => (
    <RegularPage pageWidth="md" withoutSecondaryTabs>
      {story()}
    </RegularPage>
  ))
  .add('Wizard Form final-form (experimental)', () => (
    <Wrapper background="lighter" pageWidth="md" spacing="xl">
      <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={onSubmit}>
        <Wizard.Page>
          <Blockquote
            style={{ marginBottom: '2rem' }}
            title="Regular Blockquote">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.{' '}
          </Blockquote>
          <div class="row">
            <div className="col-md-6">
              <Field
                id="firstName"
                name="firstName"
                helperText="Enter your full first name"
                component={ReduxFormWrapper}
                inputComponent={TextInput}
                labelText="First Name"
              />
            </div>
            <div className="col-md-6">
              <Field
                id="lastName"
                name="lastName"
                helperText="Some more requirements"
                component={ReduxFormWrapper}
                inputComponent={TextInput}
                labelText="Last Name"
              />
            </div>
          </div>

          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="notes"
            labelText="Notes"
            placeholder="Notes"
          />

          <Field
            id="firstName"
            name="firstName"
            helperText="Enter your full first name"
            component={ReduxFormWrapper}
            inputComponent={TextInput}
            labelText="First Name"
          />
        </Wizard.Page>
        <Wizard.Page>
          <FormGroup>
            <label htmlFor="sex">Sex</label>
            <FormGroup
              className="wfp--radio-button-group"
              name="radio-button-group"
              defaultSelected="default-selected"
              legend="Group Legend">
              <Field
                name="sex"
                component={ReduxFormWrapper}
                inputComponent={RadioButton}
                type="radio"
                value="male"
                labelText="Male"
              />
              <Field
                name="sex"
                component={ReduxFormWrapper}
                inputComponent={RadioButton}
                type="radio"
                value="female"
                labelText="Female"
              />
            </FormGroup>
            <FormGroup>
              <Field
                component={ReduxFormWrapper}
                inputComponent={TextArea}
                name="notes"
                labelText="Notes"
                placeholder="Notes"
              />
            </FormGroup>
            <Field name="sex" component={renderError} />
          </FormGroup>
        </Wizard.Page>
        <Wizard.Page
          validate={values => {
            const errors = {};
            if (!values.newNotes) {
              errors.newNotes = 'Required';
            }
            return errors;
          }}>
          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="newNotes"
            labelText="Notes"
            placeholder="Notes"
          />
        </Wizard.Page>
        <Wizard.Page>
          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="notes"
            labelText="Notes"
            placeholder="Notes"
          />
        </Wizard.Page>
      </Wizard>
    </Wrapper>
  ));
