import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Shanewaz'
        }
        console.log('LifecycleA Constructor')

        this.changeState=this.changeState.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifecycleA Component did mount!');
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate!');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate!');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }
    
    changeState(){
        this.setState({
            name: 'SA Maruf'
        });
    }

    render() {
        console.log('LifecycleA Render');
        return (
            <div>
                <h1>Life cycle A renders B</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
