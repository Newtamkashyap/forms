

export function ButtonFunction() {

    let name = "";
    console.log("Uncontrolable statements")

    function printButton1() {
        console.log("calling button1")
        console.log("calling button2", name)


    }

    function addParagraph() {
        name = "My name is Newtam"
        
        console.log("calling button2", name)


    }

    function printButton3() {
        let age=24;
        console.log("calling button3",age)

    }
    function printButton4() {
        console.log("calling button4")

    }





    return (
        <div>
            <h4>Button Function</h4>
            <p>{name}</p>
            <button onClick={printButton1}>Button1</button>
            <button onClick={() => { addParagraph() }}>AddParagraph</button>
            <button onClick={printButton3}>Button3</button>
            <button onClick={printButton4}>Button4</button>
            <button onClick={printButton4}>Button5</button>






        </div>
    )
}