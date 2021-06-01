import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Shanewaz"
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifecycleB Component did mount!');
    }

    // 
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate!');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate!');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }
    
    
    render() {
        console.log('LifecycleB Render');
        return (
            <div>
                <div>Life cycle B render</div>
            </div>
        )
    }
}

export default LifecycleB
