import React from 'react'
import {buyCake} from './redux/actions/cakeActions'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <>
        <hr />
        <h1>Cake shop - Redux</h1>
        <h4>Number of cakes {props.numberOfCakes}</h4>
        {/* <button onClick={()=>{props.dispatch(buyCake())}}>Buy cake</button> */}
        <button onClick={()=>{props.dispatchBuyCake(buyCake())}}>Buy cake</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchBuyCake: () => {
      dispatch(buyCake())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// export default connect(mapStateToProps)(CakeContainer)