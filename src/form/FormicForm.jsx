
import { useFormik } from "formik";
export function FormikForm() {
    //  const  formik = useFormik({ options });

    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: 0,
            Stock: false,
            // id: '',
            // proId: '',

        },
        onSubmit: (values) => { //
            alert(JSON.stringify(values));
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Register Product</h3>


                <input type="text" onChange={formik.handleChange} name="place" placeholder="name" /><br />

                <input type="number" onChange={formik.handleChange} name="Price" placeholder="price" /><br />
                <input type="text" onChange={formik.handleChange} name="prodId" placeholder="name" /><br />

                <input type="number" onChange={formik.handleChange} name="id" placeholder="price" /><br />
                <input type="checkbox" onChange={formik.handleChange} name="Stock" placeholder="stock" />

                <input type="submit" value={"button"} />
            </form>
        </div>
    )
}