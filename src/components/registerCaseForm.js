import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterCaseForm  = () => {
  return (
    <Form>
      <Form.Group controlId="caseId">
        <Form.Label> Case ID </Form.Label>
        <Form.Control type="input" placeholder="Enter Case ID" />
      </Form.Group>
      <Form.Group controlId="clientName">
        <Form.Label> Client Name </Form.Label>
        <Form.Control type="input" placeholder="Enter Client Name" />
      </Form.Group>
      <Form.Group controlId="court">
        <Form.Label> Court </Form.Label>
        <Form.Control type="input" placeholder="Enter Court" />
      </Form.Group>
      <Form.Group controlId="startDate">
        <Form.Label> Start Date </Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
};

export default RegisterCaseForm;
