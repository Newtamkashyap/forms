

export function ShowRegistrationForm() {

    const handleForm = (event) => {

        console.log("handling form", event)
        event.preventDefault();
        console.log("target", event.target);

        // console.log("event taget form", event.target.form)//form is not exsiting in event that's y it is giving undefined
        // console.log("event taget of 0", event.target[0])
        // console.log("event taget of 1", event.target[1])
        // console.log("event taget of 2", event.target[2])

        // console.log("event taget 0 value", event.target[0].value)
        // console.log("event taget 1 value", event.target[1].value)
        // console.log("event taget 2 value", event.target[2].value)

        console.log("event taget userName value", event.target.userName.value)
        console.log("event taget userEmail value", event.target.userEmail.value)
        console.log("event taget userNumber value", event.target.userNumber.value)



        // console.log("event taget 0 value", event.target[0].value.length)
        // console.log("event taget 1 value", event.target[1].value.length)
        // console.log("event taget 2 value", event.target[2].value.length)
        // console.log("event taget 3 value", event.target[3].value.length)

        // console.log("event type", event.type)

    }
    return (
        <div>
            <h4>Show Registration Form</h4>
            <form onSubmit={(event) => { handleForm(event) }}>
                <input type="text" placeholder="Name" required /><br />
                <input type="email" placeholder="Email" name="userEmail" /><br />
                <input type="text" placeholder="Number" name="userNumber" /><br />

                <button>Submit</button>


            </form>
        </div>
    )

}