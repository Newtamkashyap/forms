
import { useState } from "react"
const FormDetails = () => {

  const [data, setData] = useState('my paragramph initial  Data')

  const handlebutton = (e) => {
    console.log("third args", e)


  }
  const handlebutton2 = (e) => {
    console.log("third args", e)


  }
  function clubFunction() {
    handlebutton(3); handlebutton2(4)
  }

  return (
    <div>
      {/* <h1>{handlebutton("my h1 tag")} </h1> */}

      {/* <h4 onClick={handlebutton}>HTML Form</h4> */}
      <h4 onClick={
        (e) => {
          console.log("before calling handlebutton");
          handlebutton("asish kumar",e)
        }

      }> H4 HTML Form</h4>
    {/* <h2 onClick= {handlebutton,handlebutton2}>  Second</h2>  */}
      <h2 onClick={() => { handlebutton(1); handlebutton2(2) }}> H2 First</h2>
      <h2 onClick={clubFunction}> H2 Seconds</h2>
       {handlebutton("newtam ")} 


      <form>
        <label>firstName :</label>
        <input type="text" placeholder="firstname" />
        <label>lastName :</label>
        <input type="text" placeholder="lastname" />
        <label>email :</label>
        <input type="email" placeholder="email" />
        <label>Number :</label>
        <input type="number" placeholder="number" />
      </form>
      {/* <button onClick={() => handlebutton("sdfsdf")} type="button">submit</button> */}


    </div>
  )
}

export default FormDetails
