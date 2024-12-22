import { useState } from "react"



export function BasicState() {

    const [sample, setSample] = useState("testing react state variable")
    // let sample = "testing"


    /*
    problem fixed- while updating or maniplulating variable data is changing in DOM by using react state managment.

    problem not fixed- but not updating first time in console log(in function context).
    it means previous data in still there.
     */
    function print() {
        // sample = "not testing"
        // setSample("not testing")
        // setSample("not testing")
        setSample(()=>"Not testing"); 

        console.log("calling print function", sample)


    }
    

    return (
        <div>
            <h4>Basic State</h4>
            <p>{sample}</p>
            <button onClick={print}>click</button>

        </div>
    )
}