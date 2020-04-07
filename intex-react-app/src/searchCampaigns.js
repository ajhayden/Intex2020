import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import { useContext } from 'react'
import AppContext from './context'
import { useHistory } from 'react-router-dom'


function SearchCampaign(props) {
    return (
        <div style={{height: 470 }}>
            <FormController/>
        </div>
    )
}
export default SearchCampaign

const FormController = props => {
    const context = useContext(AppContext)
    const history = useHistory()
    // const [cardError, setCardError] = React.useState('none')
    return (
        <Formik
            initialValues={{
                title: 'COVID',
                category: '',
                currentAmount: '',
                donators: '',
                hasBeneficiary: 'TRUE',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                /*if(values.title === ""){
                    errors.title = 'You need a value for the title'
                }
                if(values.category === ""){
                    errors.category = 'You need a value for category'
                }
                if(values.currentAmount === ""){
                    errors.currentAmount = 'You need a value for current amount'
                }
                if(values.donators === ""){
                    errors.donators = 'You need a value for the donators'
                }
                if(values.hasBeneficiary === ""){
                    errors.hasBeneficiary = 'You need a value for the beneficiary'
                }*/
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('actions', actions)
                console.log('values', values)
                context.setQuery(values)
                history.push('/displayCampaigns')
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
            <bs.Col>
                <br/>
                <TextInput form={props.form} title="Title:" name="title" type="text" />
                <TextInput form={props.form} title="Category:" name="category" type="text" />
            </bs.Col>
            <bs.Col className='p-10' >
                <br/>
                <bs.Form.Label>Number of Donators:</bs.Form.Label>
                <br/>
                <Field as="select" name="donators" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value=""></option>
                    <option value="0-10">0-10</option>
                    <option value="10-50">10-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200-300">200-300</option>
                    <option value="300-100000">+300</option>
                </Field>
                <br/><br/>
                <bs.Form.Label>Total Amount:</bs.Form.Label>
                <br/>
                <Field as="select" name="currentAmount" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value=""></option>
                    <option value="0-0">0</option>
                    <option value="1-100">1-100</option>
                    <option value="100-1000">100-1000</option>
                    <option value="1000-3000">1000-3000</option>
                    <option value="3000-10000">3000-10000</option>
                    <option value="10000-100000">10000-100000</option>
                    <option value="100000-1000000000">+100000</option>
                </Field>
                <br/><br/>
                <bs.Form.Label>Has a beneficiary:</bs.Form.Label>
                <br/>
                <Field as="select" name="hasBeneficiary" style={{width:200, height:38, borderRadius:5, borderColor:'#ced4da'}}>
                    <option value=""></option>
                    <option value="TRUE">Yes</option>
                    <option value="FALSE">No</option>
                </Field>
                
                <br/><br/>
                <div className='text-right'>
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
                <br/>
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

