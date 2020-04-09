import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import { useContext } from 'react'
import AppContext from './context'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


function calculator(props) {
    return (
        <div>
            <FormController/>
        </div>
    )
}
export default calculator

const FormController = props => {
    const context = useContext(AppContext)
    const history = useHistory()
    // const [cardError, setCardError] = React.useState('none')
    return (
        <Formik
            initialValues={{
              standard_goal: '500000', 
              days_active: '100',
              days_created: '100',
              social_share_total: '100',
              campaign_hearts: '100',
              media_type: '0',
              project_type: '0',
              turn_off_donations: false,
              has_beneficiary: false,
              is_charity: false,
              visible_in_search: false,
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                if(values.standard_goal === ""){
                    errors.standard_goal = 'You need a value for the title'
                }
                return errors
            }}
            onSubmit={async (values, actions) => {
                const azure = await axios.post('http://localhost:8000/api/calculator/', values)
                console.log('Azure Results', azure)
                history.push('/calculator')
            }}
        >{form => (
            <BasicForm form={form} />
        )}</Formik>
    )
}
/**
 * The form layout/html.
 * This component needs finishing.
 */
const BasicForm = props => (
    <Form className="text-primary">
        <bs.Row>
            <bs.Col md='6' className='ml-3'>
                <br/>
                <TextInput form={props.form} title="Standard Goal" name="standard_goal" type="text" />
                <TextInput form={props.form} title="Days Active" name='days_active' type='number'/>
                <TextInput form={props.form} title="Days Created" name='days_created' type='number'/>
                <TextInput form={props.form} title="Social Share Total" name='social_share_total' type='number'/>
                <TextInput form={props.form} title="Campaign Hearts" name='campaign_hearts' type='number'/>           
            </bs.Col>
            <bs.Col className='mt-4'>
                <bs.Form.Label>Media Type:</bs.Form.Label>
                <br></br>
                <Field as="select" name="media_type" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value=""></option>
                    <option value='0'>Video</option>
                    <option value="1">Link</option>
                    <option value="2">None</option>
                    <option value="3">Photos</option>
                </Field>
                <br></br>
                <br></br>
                <bs.Form.Label>Project Type:</bs.Form.Label>
                <br></br>
                <Field as="select" name="project_type" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value=""></option>
                    <option value="1">Personal</option>
                    <option value="2">Charity/Organization</option>
                </Field>
                <br></br>
                <br></br>
                <TextInput form={props.form} title="Turn Off Donations" name='turn_off_donations' type='checkbox'/>
                <TextInput form={props.form} title="Has Beneficiary" name='has_beneficiary' type='checkbox'/>
                <TextInput form={props.form} title="Is Charity" name='is_charity' type='Checkbox'/>
                <TextInput form={props.form} title="Visible In Search" name='visible_in_search' type='Checkbox'/>
            </bs.Col>
        </bs.Row>
        <bs.Row>
            <bs.Col md='12'>
                <div className='text-center mt-5'>
                        <bs.Button disabled={props.form.isSubmitting} hidden={props.form.isSubmitting} className='mb-3' type="submit" variant="primary">
                            Search 
                        </bs.Button>
                        <bs.Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            hidden={!props.form.isSubmitting}
                            />
                </div>
            </bs.Col>
        </bs.Row>
    </Form>
)

const TextInput = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled={rProps.form.isSubmitting}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
