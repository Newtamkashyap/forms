import { useState } from "react"

export function MyForm(){
    const[myData,setMyData]=useState({
        name:"Newtam",
        age:24,
        dob:"16/07/2000",
        email:"nky3037@gmail.com",
    })

    function showMyData(){
        console.log("show my data",myData)
    }

    return(
        <div>
            <h2>Priniting myData</h2>
            <p>{myData["name"]}</p>
            <p>{myData["age"]}</p>
            <p>{myData.email}</p>
            <p>{myData.dob}</p>

            <form>
            <h4>My Form with full Functionality</h4>
            <input type="text" placeholder="Name" onChange={(event)=>{setMyData({...myData,name:event.target.value})}}/><br/>
            <input type="text" placeholder="Name" onChange={(event)=>{setMyData({...myData,age:event.target.value})}}/><br/>
            <input type="text" placeholder="Age" /><br/>
            <input type="text" placeholder="DOB"/><br/>
            <input type="text" placeholder="Email"/><br/>
            <button onClick={()=>{showMyData()}}>Submit</button>
            </form>

        </div>
    )
}