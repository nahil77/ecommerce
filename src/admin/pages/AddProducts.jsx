import React, { useState } from 'react'
import { Button, Container, Form,  Row } from 'react-bootstrap'
import './AddProducts.css';

const AddProducts = () => {

  const [validated, setValidated] = useState(false);

  const [productData,setProductData] = useState({
    productName : '',
    productCategory : '',
    productPrice : '',
    productStock : '',
    productPhoto : null
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }else{
      console.log("Form Submitted Successfully ");
      setValidated(true);
    }

    
  };

  const handleChange = (e)=>{
    const {name,value} = e.target;

    if(name === 'productPhoto'){
      setProductData({...productData,[name]:e.target.files[0]}) 
    }else{
      setProductData({...productData,[name]:value})
    }

  }

  console.log("productData------->",productData);

  return (

    <Container className='position'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='width'>
    <Row className="mb-3">
      <Form.Group  controlId="validationCustom01" className='position-relative'>
        <Form.Label>Product Name :</Form.Label>
        <Form.Control
        onChange={handleChange}
          required
          type="text"
          name = "productName"
          placeholder="Product Name"
        />
        <Form.Control.Feedback type='invalid' tooltip>Please Enter Product Name</Form.Control.Feedback>
        <Form.Control.Feedback type='valid' tooltip>It Looks Good </Form.Control.Feedback>
      </Form.Group>
      <Form.Group  controlId="validationCustom02" className='position-relative'>
        <Form.Label>Category :</Form.Label>
        <Form.Control
        onChange={handleChange}
          required
          type="text"
          name = "productCategory"
          placeholder="Category"
        />
        <Form.Control.Feedback type='invalid' tooltip>Please Enter Category</Form.Control.Feedback>
        <Form.Control.Feedback type='valid' tooltip>It Looks Good </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group  controlId="validationCustom02" className='position-relative'>
        <Form.Label>Price :</Form.Label>
        <Form.Control
        onChange={handleChange}
          required
          type="number"
          name = "productPrice"
          placeholder="Price"
        />
        <Form.Control.Feedback type='invalid' tooltip>Please Enter Price </Form.Control.Feedback>
        <Form.Control.Feedback type='valid' tooltip>It Looks Good </Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="validationCustom02" className='position-relative'>
        <Form.Label>Stock :</Form.Label>
        <Form.Control
        onChange={handleChange}
          required
          type="text"
          name = "productStock"
          placeholder="Stock"
        />
        <Form.Control.Feedback type='invalid' tooltip>Please Enter Stock </Form.Control.Feedback>
        <Form.Control.Feedback type='valid' tooltip>It Looks Good </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Product Photo</Form.Label>
        <Form.Control type="file" name='productPhoto' onChange={handleChange} />
      </Form.Group>
    </Row>
    <Button className='mb-3' type="submit">Submit form</Button>
  </Form>
    </Container>
  )
}

export default AddProducts