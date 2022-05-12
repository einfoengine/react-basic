import React from 'react'
import CakeContainer from './CakeContainer'
import {Provider } from 'react-redux'
import store from './redux/store'

const Redux = () => {
  console.log("Redux App Root - store", store);
  return (
      <Provider store={store}>
        <div className="redux-app">
            <CakeContainer/>
        </div>
      </Provider>
  )
}

export default Redux

/*
  *. Make reducer
  *. Create store and pass the required reducer to update store
  *. Wrap the necessery components/Container components using Provider component and pass the store in store props. 
  *. The container component, recieves the state as props
  *. Connect the container component
*/ 