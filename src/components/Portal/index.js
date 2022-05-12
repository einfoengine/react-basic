import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
  return ReactDom.createPortal(
      <>
        <h1>Portal</h1>
        <p>React Portal is a first-class way to render child components into a DOM node outside of the parent DOM hierarchy defined by the component tree hierarchy</p>
      </>,
      document.getElementById('portal-root')
  )
}

export default Portal