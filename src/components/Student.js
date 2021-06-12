import React, { Component } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';


export default class Student extends Component{
    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname: '',
            email: '',
            branch: '',
            year: '',
            aspirations: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return (
            <div className='container'>
                <h1>Student Details</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className='mb-3' controlId='StudentFirstName'>
                        <Form.Label column md={2}>First Name:</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='text'
                                name='firstname'
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                placeholder='Sudeep'></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='StudentLastName'>
                        <Form.Label column md={2}>Last Name:</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='text'
                                name='lastname'
                                value={this.state.lastname}
                                onChange={this.handleInputChange}                                 
                                placeholder='Rana'></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='StudentEmail'>
                        <Form.Label column md={2}>E-mail:</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                placeholder='sundeeprana@gmail.com'></Form.Control>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className='mb-3' controlId='StudentBranch'>
                            <Form.Label as='legend' column md={2}>
                                Branch:
                            </Form.Label>
                            <Col md={10}>
                                <Form.Check 
                                    type='radio'
                                    name='branch'
                                    value='CSE'
                                    onChange={this.handleInputChange}
                                    label='CSE'/>
                                <Form.Check 
                                    type='radio' 
                                    name='branch' 
                                    value='IT' 
                                    onChange={this.handleInputChange}
                                    label='IT'/>
                                <Form.Check 
                                    type='radio' 
                                    name='branch' 
                                    value='ECE' 
                                    onChange={this.handleInputChange}
                                    label='ECE'/>
                                <Form.Check 
                                    type='radio' 
                                    name='branch' 
                                    value='EEE' 
                                    onChange={this.handleInputChange}
                                    label='EEE'/>
                                <Form.Check 
                                    type='radio' 
                                    name='branch' 
                                    value='MAE' 
                                    onChange={this.handleInputChange}
                                    label='MAE'/>
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row} className='mb-3' controlId='StudentYear'>
                            <Form.Label as='legend' column md={2}>
                                Year:
                            </Form.Label>
                            <Col md={10}>
                                <Form.Check 
                                type='radio' 
                                name='year'
                                value='1'
                                onChange={this.handleInputChange}
                                label='1st'/>
                                <Form.Check 
                                type='radio' 
                                name='year'
                                value='2'
                                onChange={this.handleInputChange}
                                label='2nd'/>
                                <Form.Check 
                                type='radio' 
                                name='year'
                                value='3'
                                onChange={this.handleInputChange}
                                label='3rd'/>
                                <Form.Check 
                                type='radio' 
                                name='year'
                                value='4'
                                onChange={this.handleInputChange}
                                label='4th'/>
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} className='mb-3' controlID='StudentAim'>
                        <Form.Label column md={2}>Aspirations after college:</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                as='textarea'
                                name='aspirations'
                                value={this.state.aspirations}
                                onChange={this.handleInputChange}></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlID='SubmitButton'>
                        <Col md={{span:10, offset:2}}>
                            <Button type='submit' variant='primary'>Submit</Button>{' '}
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}