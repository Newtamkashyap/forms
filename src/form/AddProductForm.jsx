import { useState } from "react";


export function AddProductForm() {
    const [productDetails, setProductDetails] = useState({
        proID: '1',
        proName: 'Shampoo',
        proPrice: '2000'
    })

    let p = {
        proID: '1',
        proName: 'Shampoo',
        proPrice: '2000'
    }

    console.log("printing before re-assignment p", p); //empty object.
    p = {}
    console.log("printing p", p); //empty object.

    p = {
        name: "Newtam",
        class: "12th"
    }
    console.log("printing re-assignment ", p)

    p={...productDetails,name:"Newtam"}
    console.log("prinintg productDetails",p);

    p = "newtam"
    console.log("printing re-assigmnebt ", p)



    function handleForm(event) {

        event.preventDefault();
        console.log("handling product form")



    }
    return (
        <div>
            <p>{productDetails.proID}</p>
            <p>{productDetails.proName}</p>
            <p>{productDetails.proPrice}</p>

            <h4>Add Product Form</h4>
            <form onSubmit={(e) => { handleForm(e) }}>
                {/* <input type="text" placeholder="productId" name="proId" onChange={(event)=>{setProductDetails({proID:event.target.value,proName:"Shampoo",proPrice:200})}}/><br /> */}
                <input type="text" placeholder="productId" name="proId" onChange={(event) => { setProductDetails({ ...productDetails, proID: event.target.value }) }} /><br />

                <input type="text" placeholder="productPrice" name="proPrice" onChange={(event) => { setProductDetails({ ...productDetails, proPrice: event.target.value }) }} /><br />
                <input type="text" placeholder="productName" name="proName" onChange={(event) => { setProductDetails({ ...productDetails, proName: event.target.value }) }} /><br />
                <button>Submit</button>

            </form>
        </div>
    )
}