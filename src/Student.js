import React from "react"

function Student(p){
        return(
            <div className="App">
            <h1>Hello {p.name}</h1>
            <h1>{p.Email}</h1>
            <h1> {p.other.Designation}</h1>
            </div>
            
        )
}
export default Student