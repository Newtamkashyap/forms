

export default function Index() {
    
    function handleButton(){
        console.log("handling form")
    }
    return (
        <div>
            <h4>Index Page</h4>
            <p>Form is without form tag</p>
            
                
                <label>Name</label>

                <input type="text" placeholder="Enter your name" value="Newtam" /><br />
                <input type="email" placeholder="Enter your name" value="nky3037@gmail.com" /><br />
                <input type="text" placeholder="Enter your name" /><br />
                <input type="text" placeholder="Enter your name" /><br />

                <button onClick={handleButton}>Submit Form</button>
            

        </div>
    )
}