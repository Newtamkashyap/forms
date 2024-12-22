import { useState } from "react"


export function NewFormDetails() {

    const [studentDetails, setStudentDetails] = useState(
        {
            studName: "Newtam",
            studEmail: "nky3037@gmail.com",
            studCourse: "python",
            studId: "102",
        }
    )

    // function handleFormDetails(event) {
    //     event.preventDefault()
    //     console.log("printing handleFormDetails", event)
    // }

    function onClickSubmitButton(){
        console.log("calling onClickSubmitButton",studentDetails)
    }
    return (
        <div>
            <p>{studentDetails.studName}</p>
            <p>{studentDetails.studId}</p>
            <p>{studentDetails.studEmail}</p>
            <p>{studentDetails.studCourse}</p>

            <h4>New Form Details</h4>
            <form >
                <input type="text" placeholder="Enter your Name" value="kkkkk" onChange={(event) => { setStudentDetails({ ...studentDetails, studName: event.target.value }) }} /><br />
                <input type="text" placeholder="Enter your Student Id " onChange={(event) => { setStudentDetails({ ...studentDetails, studId: event.target.value }) }} /><br />
                <input type="text" placeholder="Enter your Email" onChange={(event) => { setStudentDetails({ ...studentDetails, studEmail: event.target.value }) }} /><br />
                <input type="text" placeholder="Enter your Course" onChange={(event) => { setStudentDetails({ ...studentDetails, studCourse: event.target.value }) }} /><br />
                <button onClick={()=>{onClickSubmitButton()}}>Submit</button>


            </form>


        </div>
    )
}