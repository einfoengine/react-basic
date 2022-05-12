
import React, {useContext} from 'react'
// import { UserContext } from '.'
import { UserContext, ChannelContext} from '.'

const CompF = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      {/* <UserContext.Consumer>
        {
          value => {
            return <p>User context value <i className='text-warning'>{value}</i></p>
          }
        }
      </UserContext.Consumer> */}
      <p>The name of the user is <span className='text-primary'>{user}</span></p>
      <p>The name of the Channel is <span className='text-primary'>{channel}</span></p>
    </>
  )
}

export default CompF