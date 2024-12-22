import { Link } from "react-router-dom";
import pageNavigation from '../pages/pageNavigation.css';


export const PageNavigation=()=>{
    return(
        <div>
            <ul>
                <li>
                  <Link to='/'>Home</Link>  
                  </li>
                  <li>
                  <Link to='/contact'>Contact</Link>  
                  </li>
                  <li>
                  <Link to='/about'>About</Link>  
                  </li>
                  <li>
                  <Link to='/user-detail-form'>User Detail Form</Link>  
                  </li>
                  <li>
                  <Link to='/student-form'>Student Registration Form</Link>  
                  </li>
                  <li>
                  <Link to='/button-function'>Button Form</Link>  
                  </li>
                  <li>
                  <Link to='/new-form'>New-Form-Page</Link>  
                  </li>
                  <li>
                  <Link to='/show-reg'>Show Registration form</Link>  
                  </li>
                  <li>
                  <Link to='/add-product-form'>Add product form</Link>  
                  </li>

                  <li>
                  <Link to='/new-form-details'>New Form</Link>  
                  </li>

                  <li>
                  <Link to='/index-page'>Index Form</Link>  
                  </li>

                  
                  <li>
                  <Link to='/user-form'>User Form</Link>  
                  </li>

                  <li>
                  <Link to='/my-form'>My Form</Link>  
                  </li>
                  
                   
                  <li>
                  <Link to='/my-new-form'>My New Form</Link>  
                  </li>

                  <li>
                  <Link to='/formik-form'>Formic Form</Link>  
                  </li>
                  
                  
                  <li>
                  <Link to='/formik-validation-form'>Formic Validation Form</Link>  
                  </li>

                  <li>
                  <Link to='/cookies'>cookies</Link>  
                  </li>
                  
                  <Link to='/formExample'>Form Example</Link>  


                  
               

            </ul>
        </div>
    )
}