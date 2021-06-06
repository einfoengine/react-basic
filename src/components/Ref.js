import React, { Component } from 'react';


class Ref extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();

        // Second approach of ref
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }

        this.state = {
             
        }
    }

    handleClick = () => {
        alert(this.inputRef.current.value);
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
        this.inputRef.current.value="Hi";
        console.log(this.inputRef);
        if (this.cbRef){
            this.cbRef.value = 'I am cbRef';
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleClick}>Click here</button>
                <input type="text" ref={this.setCbRef} />
            </div>
        );
    }
}

export default Ref;
/* 
Steps:
1. Create a ref in the constructor.
2. Attach this ref to our element in the imput element in the render mothod.
3. Call the focus method on this input element.

*. There is a second way which is calld, callback ref.
1. Create ref.
2. Assign a dom element in the created ref.
3. Attach an attribute with the set ref method.

*/