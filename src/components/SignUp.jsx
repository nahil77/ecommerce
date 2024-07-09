import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as formik from 'formik';
import * as yup from 'yup';
import "./SignUp.css";

const SignUp = () => {

    const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required("Please Enter First Name"),
    lastName: yup.string().required("Please Enter Last Name"),
    email: yup.string().required("Please Enter a Valid Email"),
    number: yup.number().required("Please Enter a Phone Number").positive().integer().test('Length', 'Number Should Be 10 Digits', (value) => String (value).length === 10),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "password should include one small letter,one capital letter and one number"),
    ConfirmPassword: yup.string().required().oneOf([yup.ref('password'),null],"confirm password must match with password"),
    photo: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  const signUpFormSubmitHandle = (values)=>{
        console.log("form values------->",values);

  }

  return (
    <Container>
      <Row>
        <Col md={4} >
        <Formik
    validationSchema={schema}
    onSubmit={signUpFormSubmitHandle}
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      ConfirmPassword: '',
      photo: null,
      terms: false,
    }}
  >
    {({ handleSubmit, handleChange, values, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type='invalid' tooltip>{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />

            <Form.Control.Feedback type='invalid' tooltip>{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group  controlId="validationFormikUsername2">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              name="number"
              value={values.number}
              onChange={handleChange}
              isInvalid={!!errors.number}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.number}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Confirm Password"
              name="ConfirmPassword"
              value={values.ConfirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.ConfirmPassword}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.ConfirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="position-relative mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            required
            name="photo"
            onChange={handleChange}
            isInvalid={!!errors.photo}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.photo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isInvalid={!!errors.terms}
            feedback={errors.terms}
            feedbackType="invalid"
            id="validationFormik106"
            feedbackTooltip
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    )}
  </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp