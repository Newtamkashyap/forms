

const MyNewForm = () => {

    const handleForm=(event)=>{
        event.preventDefault();
        console.log("printing handling form")
        // console.log("printing input of 0",event.target.uName.value)
    }
    return (
        <div>
            <h4>My New Upated Form</h4>
            <form>
                <input type="text" placeholder="Name" name="uName" required /><br />
                <input type="email" placeholder="Email" name="email" /><br />
                <input type="text" placeholder="Number" name="number"  min="10" max="11" /><br />

                <button  onClick={(event)=>{handleForm(event)}}>Submit</button>
            </form>
        </div>
    )
}
export default MyNewForm;