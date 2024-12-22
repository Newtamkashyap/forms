import { useState } from "react"


export function StudentRegistrationForm() {

    const [name, setName] = useState(
    )

    const print = (e) => {
        console.log("calling print function", e)
    }

    function onInputChange(data) {

        console.log("calling onInputChange function", data)


    }
    return (
        <div>
            <h4>Student Registration Form</h4>
            <p> {name}</p>
            {/* <input type="text" placeholder="Enter your Name"  onChange={()=>{onInputChange("Ashish")}}/> */}
            {/* <input type="text" placeholder="Enter your Name" onChange={(event) => { onInputChange(event.target.value) }} /> */}
            <input type="text" placeholder="Enter your Name" onChange={(event) => { setName(event.target.value) }} />

            <button onClick={() => { onInputChange("calling from button") }}>button</button>
            {/* <button onClick={(e)=>{print(e)}}>Submit</button> */}



        </div>
    )
}