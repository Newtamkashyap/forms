import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import { UserDetailsForm } from './UserDetailsForm';
import FormDetails from './FormDetails';
import { PageNavigation } from './pages/PageNavigation';
import { NewForm } from './NewForm';
import { StudentRegistrationForm } from './form/StudentRegistrationForm';
import { ButtonFunction } from './basic/ButtonFunction';
import { BasicState } from './basic/BasicState';
import { ShowRegistrationForm } from './form/ShowRegistrationForm';
import { AddProductForm } from './form/AddProductForm';
import { NewFormDetails } from './form/NewFormDetails';
import Index from './form/Index';
import UserForm from './form/UserForm';
import { MyForm } from './form/MyForm';
import MyNewForm from './form/MyNewForm';
import { FormikForm } from './form/FormicForm';
import { FormicValidationForm } from './form/FormicValidationForm';
import { CookiesDemo } from './form/CookiesDemo';
import { FormExample } from './form/FormExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path="user-detail-form" element={<UserDetailsForm />} />
        <Route path="form-details" element={<FormDetails />} />
        <Route path="new-form" element={<NewForm />} />
        <Route path="student-form" element={<StudentRegistrationForm />} />
        <Route path="button-function" element={<ButtonFunction />} />
        <Route path="basic-state" element={<BasicState />} />
        <Route path="show-reg" element={<ShowRegistrationForm />} />
        <Route path="add-product-form" element={<AddProductForm />} />
        <Route path="new-form-details" element={<NewFormDetails />} />
        <Route path='index-page' element={<Index />} />
        <Route path='user-form' element={<UserForm />} />
        <Route path='my-form' element={<MyForm />} />
        <Route path='my-new-form' element={<MyNewForm />} />
        <Route path='formik-form' element={<FormikForm />} />
        <Route path='formik-validation-form' element={<FormicValidationForm />} />
        <Route path='cookies' element={<CookiesDemo/>} />
        <Route path='formExample' element={<FormExample/>} />














        <Route path="*" element={<PageNotFound />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
