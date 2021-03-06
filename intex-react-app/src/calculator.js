import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import axios from 'axios'


function calculator(props) {
    return (
        <div className="text-primary divSize2">
            <FormController/>
        </div>
    )
}
export default calculator

const FormController = props => {
    const [amountFinal, setAmountFinal] = React.useState(0)
    const [amountColor, setAmountColor] = React.useState('danger')
    return (
        <Formik
            initialValues={{
              standard_goal: '', 
              days_active: '',
              days_created: '',
              social_share_total: '',
              campaign_hearts: '',
              media_type: '2',
              project_type: '1',
              turn_off_donations: false,
              has_beneficiary: false,
              is_charity: false,
              visible_in_search: false,
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                if(isNaN(parseInt(values.standard_goal))){
                    errors.standard_goal = 'Standard goal is not a number'
                }
                if(isNaN(parseInt(values.days_active))){
                    errors.days_active = 'Days active is not a number'
                }
                if(isNaN(parseInt(values.days_created))){
                    errors.days_created = 'Days created is not a number'
                }
                if(isNaN(parseInt(values.social_share_total))){
                    errors.social_share_total = 'Social share total is not a number'
                }
                if(isNaN(parseInt(values.campaign_hearts))){
                    errors.campaign_hearts = 'Campaign hearts is not a number'
                }
                if(values.media_type === ""){
                    errors.media_type = 'Media type must be filled out'
                }
                if(values.project_type === ""){
                    errors.project_type = 'Project type must be filled out'
                }
                if(isNaN(parseInt(values.standard_goal)) > 1000000000){
                    errors.standard_goal = 'Standard goal value is too high'
                }
                return errors
            }}
            onSubmit={async (values, actions) => {
                const azure = await axios.post('/api/calculator/', values)
                const jsonV = JSON.parse(azure.data)
                const jsonAmountFinal = jsonV.Results.output1.value.Values[0][12]
                setAmountFinal(Number(jsonAmountFinal).toFixed(2))
                setAmountColor('success')
            }}
        >{form => (
            <BasicForm amountFinal={amountFinal} amountColor={amountColor} form={form} />
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
                <TextInput form={props.form} placeholder="How much will the campaign make?" title="Standard Goal" name="standard_goal" type="text" />
                <TextInput form={props.form} placeholder="How many days active?" title="Days Active" name='days_active' type='text'/>
                <TextInput form={props.form} placeholder="How many days since the campaign was created?" title="Days Created" name='days_created' type='text'/>
                <TextInput form={props.form} placeholder="How many social media shares will it receive?" title="Social Share Total" name='social_share_total' type='text'/>
                <TextInput form={props.form} placeholder="How many campaign hearts will it receive?"title="Campaign Hearts" name='campaign_hearts' type='text'/>           
            </bs.Col>
            <bs.Col className='mt-4'>
                <bs.Form.Label>Media Type:</bs.Form.Label>
                <br></br>
                <Field as="select" name="media_type" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value="2">Photos</option>
                    <option value="0">Video</option>
                    <option value="3">Link</option>
                    <option value="1">None</option>
                </Field>
                <br></br>
                <br></br>
                <bs.Form.Label>Project Type:</bs.Form.Label>
                <br></br>
                <Field as="select" name="project_type" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value="1">Personal</option>
                    <option value="2">Charity/Organization</option>
                </Field>
                <br></br>
                <br></br>
                <bs.Form.Label> Turn Off Donations</bs.Form.Label>&nbsp;
                <Field type="checkbox" name="turn_off_donations" />
                <br></br><br></br>
                <bs.Form.Label> Has Beneficiary</bs.Form.Label>&nbsp;
                <Field type="checkbox" name="has_beneficiary" />
                <br></br><br></br>
                <bs.Form.Label> Is Charity</bs.Form.Label>&nbsp;
                <Field type="checkbox" name="is_charity" />
                <br></br><br></br>
                <bs.Form.Label> Visible In Search</bs.Form.Label>&nbsp;
                <Field type="checkbox" name="visible_in_search" />
                <br></br><br></br>
            </bs.Col>
        </bs.Row>
        <bs.Row>
            <bs.Col md='6'>
                <div className='text-center mt-3'>
                        <bs.Button disabled={props.form.isSubmitting} hidden={props.form.isSubmitting} className='mb-3' type="submit" variant="primary">
                            Calculate 
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
            <bs.Col md='3'>
                <div className='text-center'>
                        <div style={{fontSize: 40}} className={"text-"+ props.amountColor}>${props.amountFinal}</div>
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
