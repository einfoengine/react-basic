import React from 'react'
import CompC from './CompC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext("Marufs Channel"); // this gives a default value

const UseContext = () => {
  return (
    <>
      <hr />
      <h1>UseContext</h1>
      <div className="card container">
        <u>Steps:</u>
        1. Create Context
        2. Import useContext()
        3. Import all the contexts
      </div>
      <UserContext.Provider value={'Shanewaz Al Maruf'}>
      <ChannelContext.Provider value={"SAM's Production"}>
        <CompC/>
      </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default UseContext