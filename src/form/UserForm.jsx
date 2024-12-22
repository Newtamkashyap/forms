

const UserForm = () => {

    function handleButton() {
        console.log("handling form button")
    }
    return (
        <div>
            <h4>User Form</h4>
            <p> With form tag</p>

            <form>

                <label>Name</label>

                <input type="text" placeholder="Enter your name" name="name"/><br />
                <input type="email" placeholder="Enter your name" name="email"/><br />
                <input type="text" placeholder="Enter your name" name="abc"/><br />
                <input type="text" placeholder="Enter your name" name="xty" /><br />

                <button onClick={handleButton}>Submit Form</button>
            </form>



        </div>
    )
}

export default UserForm
