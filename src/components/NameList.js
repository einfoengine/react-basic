import React from 'react'

function NameList(props) {
    const personsList = props.persons.map((element, index)=>{
        return (
            <li key={index+element.__id}>{element.name}</li>
        )
    });

    return (
        <>
            <h1>Name List</h1>
            {personsList}
        </>
    )
}

export default NameList
/* 
    - The key is important for react to know which item to be updated in case of any need to update a list item.
    - That must be unique with each item
    - key property could be passed through the component that would required to map 
*/