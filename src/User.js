import React from "react"
function User(){
    return(
        <h1>Hi User</h1>
    )
}

function Employee(){
    return (
        <div>
            <h1>Hi Employee</h1>
            <h1>How are you</h1>
        </div> 
    )
}

export default class Emp extends React.Component{
    render(){
        return(
            <h1>This is class Component</h1>
            )
    }
        
    
}
export {User,Employee}
