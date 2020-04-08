import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import { useContext } from 'react'
import AppContext from './context'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


function calculator(props) {
    return (
        <div className="divSize">
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
              standard_goal: '2222',
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
            <bs.Col md='12' className='ml-3'>
                <br/>
                <TextInput form={props.form} title="Standard Goal" name="standard_goal" type="text" />
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
