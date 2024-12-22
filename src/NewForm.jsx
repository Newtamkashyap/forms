import { useState } from "react"

export function NewForm() {
    // const [userDetails,setUserDetails]=useState({
    //     name:"Newtam",
    //     email:"nky3037@gmail.com",
    //     number:98765432123
    // })

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        number: ""
    })

    function submitForm(event) {
        console.log("Form submitted successfully", event)
    }
    return (
        <div>
            <h4>New Form Page</h4>

            <form>
                <label>Name :</label>
                <input type="text" onChange={(event) => { setUserDetails(event.target.value) }} />

                <label>Email :</label>
                <input type="email" />

                <label>Number :</label>
                <input type="number" />

                <button type="submit" onClick={(event) => { submitForm(event.target.value) }}>Submit</button>
                {/* <p>My name is {userDetails.name}</p>
                <p>My email is {userDetails.email}</p>
                <p>My number is {userDetails.number}</p> */}
                <p>My number is {userDetails.name}</p>
                <p>My number is {userDetails.email}</p>
                <p>My number is {userDetails.number}</p>




            </form>
            {/*
            after the form tag if we are using button tag it will not reload and submit the form to browser.
            In the above button tag which is in the form tag it will load and submit to the browser.
            <button type="submit" onClick={() => { submitForm() }}>Submit</button> 

            */}



        </div>
    )
}