import { useState } from "react"

 export function UserDetailsForm(){

    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        email:'',
        number:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);

    }


    return(
        <div>
          <form>
            <label>FirstName :</label>
            <input type="text" placeholder="firstname" id="firstname" value={data.firstname}  onChange={ (e)=>{setData({...data,firstname:e.target.value})}}/>
            <label>LastName :</label>
            <input type="text" placeholder="lastname" id="lastname"  value={data.lastname} onChange={(e)=>{setData({...data,lastname:e.target.value})}}/>
            <label>Email :</label>
            <input type="email" placeholder="email" id="email"  value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
            <label>Number :</label>
            <input type="number" placeholder="number" id="number"  value={data.number} onChange={(e)=>{setData({...data,number:e.target.value})}}/>
            {/* <button type="submit">submit</button> */}
            <button onSubmit={handleSubmit} type="submit">submit</button>

          </form>

        </div>
    )
 }