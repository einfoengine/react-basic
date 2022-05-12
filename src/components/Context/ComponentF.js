import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (providerValue)=>{
                            return `Hello ${providerValue}`
                        }
                    }
                </UserConsumer>
            </div>
        );
    }
}

export default ComponentF;

