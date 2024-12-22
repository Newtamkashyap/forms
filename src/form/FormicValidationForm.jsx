import { useFormik } from "formik"

export function FormicValidationForm() {

    function validateForm(data) {
        var errors = { name: '', price: '', city: '', stock: '' }

        // =============validating name===========
        if (data.name.length == 0) {
            errors.name = "Name Required";
        }
        else {
            if (data.name.length < 4) {
                errors.name = "Name too short min 4 chars required";
            }
            else {
                errors.name = "";
            }
        }

        // ==============validating Price=======================
        if (data.price.length == 0) {
            errors.price = "Price required";
        }
        else {
            if (isNaN(data.price)) {
                errors.price = "Price must be number"
            }
            else {
                errors.price = "";
            }
        }

        // ===========validating City================

        if (data.city.length == "-1") {
            errors.city = "Please select city"
        }
        else {
            errors.city = '';
        }
        return errors;
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            city: '',
            stock: true

        },
        validate: () => validateForm,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div>
            <h4>Formic Validation Form</h4>

            <form onSubmit={formik.handleSubmit}>
                <label >{formik.errors.name}ProductName</label>
                
                <input type="text" placeholder="porduct name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <div>{formik.errors.name}</div><br />
                <input type="text" placeholder="price" name="price" onBlur={formik.handleBlur} onChange={formik.handleChange} /><br />
                <select name="city" onChange={formik.handleChange}>
                    <option value="-1">Select your city</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyd">Hyd</option>

                </select><br />
                <input type="checkbox" name="stock" onChange={formik.handleChange} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}