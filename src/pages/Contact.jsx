import React, { useState } from 'react'
import "./Contact.css"
import { Container } from 'react-bootstrap';

const Contact = () => {

  const [contactForm, setContactForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors,setErrrors] = useState({
    fullname: '',
      email: '',
      phone: '',
      message: ''
  })
  const validateForm = () => {
    let valid = true;

    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }

    if(!contactForm.fullname.trim()){
      newErrors.fullname = "Full Name is Required";
      valid = false;
    }else if(contactForm.fullname.length < 3){
      newErrors.fullname = "Minimum Letters Should be 4";
      valid = false;
    }

    if(!contactForm.email.trim()){
      newErrors.email = "Email is Required";
      valid = false;
    }else if(!/\S+@\S+\.+\S+/.test(contactForm.email)){
      newErrors.email = "Invalid Email";
      valid = false;
    }

    if(!contactForm.phone.trim()){
      newErrors.phone = "Phone Number is Required";
      valid = false;
    }else if(!/^(\+91|\+0|91|0)?[0-9]{10}$/.test(contactForm.phone)){
      newErrors.phone = "phone number must be 10 digits"
      valid = false;
    }

    if(!contactForm.message.trim()){
      newErrors.message = "message is Required";
      valid = false;
    }

    setErrrors(newErrors);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()){
      console.log("Form submitted--------->",contactForm);
    }
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target; // 1) [name,value]>>>destructure / 2) name=e.target.name ,value = e.target.value (two methods result same)
    setContactForm({...contactForm, [name]:value });
  }
  return (
    <Container>

      <h2 className='mt-2'>CONTACT FORM</h2>

      <div>
        <form className='contact-form mt-3' onSubmit={handleSubmit}>

          <input type="text" name='fullname' placeholder='Enter Your Fullname' onChange={handleOnChange} />
          <span className='error'>{errors?.fullname}</span>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={handleOnChange} />
          <span className='error'>{errors?.email}</span>
          <input type="tel" name='phone' placeholder='Enter Your Phone Number' onChange={handleOnChange} />
          <span className='error'>{errors?.phone}</span>
          <textarea name="message" cols="30" rows="7" placeholder='Enter your Message' onChange={handleOnChange}></textarea>
          <span className='error'>{errors?.message}</span>

          <button className='my-3'>Submit</button>

        </form>
      </div>
    </Container>
  )
}

export default Contact;