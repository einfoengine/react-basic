import React from 'react'

const LiftingState = () => {
  return (
    <>
        <h1>Lifting state</h1>
        <h4>Often, several components need to reflect the same changing data. It is recommend lifting the shared state up to their closest common ancestor.</h4>
        <p>We will start with a component called BoilingVerdict. It accepts the celsius temperature as a prop, and prints whether it is enough to boil the water:</p>
    </>
  )
}

export default LiftingState