import React, { Component } from 'react';
import ComponentE from './ComponentE';
import { UserProvider } from './UserContext';


class Componentc extends Component {
    render() {
        return (
            <>
                <hr />
                <h1>
                    Context here
                </h1>
                <h4>There are three steps</h4>
                <ul>
                    <li>1. Create the context</li>
                    <li>2. Provide the value</li>
                    <li>3. Consume the value</li>
                </ul>
                <UserProvider value='Shams'>
                    <ComponentE/>
                </UserProvider>
            </>
        );
    }
}

export default Componentc;
