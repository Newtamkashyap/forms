


export function FormExample() {

    function handleSubmit(event) {
        event.preventDefault()

        if (event.target.name.value == "" || event.target.name.value.length <= 3) {
             alert("Name should not be Empty");
            return;
            

        } else if (event.target.id.value == "") {
            alert("Id should not be Empty");
            return;
        }

        else if (event.target.id.value.length < 3) {
            alert("id is too short");
            return;
        }
        else if (event.target.email.value == "") {
            alert("Email should not be Empty");
            return;
        }
        else if (event.target.number.value == "" || event.target.number.length <= 10) {
            alert("Number should not be Empty");
            return;

        }

        console.log("calling handleSubmit function name ", event.target.name.value);

        console.log("calling handleSubmit function id", event.target.id.value);
        console.log("calling handleSubmit function number", event.target.number.value);
        console.log("calling handleSubmit function email", event.target.email.value);



    }


    return (
        <div>
            <h4>Form Example</h4>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <div>
                    <dl> UserName</dl>
                    <dt><input type="text" name="name" /></dt>

                    <dl> UserEmail</dl>
                    <dt><input type="email" name="email" /></dt>

                    <dl> UserNumber</dl>
                    <dt><input type="number" name="number" /></dt>

                    <dl> UserId</dl>
                    <dt><input type="number" name="id" /></dt>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}