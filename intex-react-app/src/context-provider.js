import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import { produce } from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.actions = {
            setQuery: this.setQuery
        }
        this.state = {
            campaigns: [],
            query:{}
        }
    }

    setQuery = (values) => {
        // get current quantity from this.state.cart
        //const qty = this.state.cart[pid]
        // set the new cart
        this.setState(state => produce(state, draft => {
            draft.query = {
                "title": values.title,
                "category": values.category,
                "currentAmount": values.currentAmount,
                "donators": values.donators,
                "hasBeneficiary": values.hasBeneficiary,
            }
        }))
    }

    render() {
        
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }


    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/api/campaign')
        this.setState({
            campaigns: resp.data
          });
    }

}
