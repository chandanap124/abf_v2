import React, { Component } from 'react';
import {
    Badge,
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
} from 'reactstrap';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            regimentNumber: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }
    handleChange(event) {
        this.setState({regimentNumber: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.regimentNumber);
        event.preventDefault();
    }



    render() {
        return (
            <div className="animated fadeIn">
                <Row>

                    <Col xs="12" sm="12">
                        <Card>
                            <Form onSubmit={this.handleSubmit}>
                            <CardHeader>
                                <strong>Company</strong>
                                <small> Form</small>
                            </CardHeader>
                            <CardBody>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="regNum">Regiment Number</Label>
                                            <Input type="text" id="regimentNumber" placeholder="Enter Regiment Number" value={this.state.regimentNumber} onChange={this.handleChange}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="Regiment">Regiment</Label>
                                            <Input type="select" name="regiment" id="regiment">
                                                <option value="0">Please select</option>
                                                <option value="1">SLA</option>
                                                <option value="2">SLAC</option>
                                                <option value="3">Eng</option>
                                            </Input>

                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="my-1">

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="unit">Unit</Label>
                                            <Input type="select" name="unit" id="unit">
                                                <option value="0">Please select</option>
                                                <option value="1">1SLSC</option>
                                                <option value="2">2SLSC</option>
                                                <option value="3">3SLSC</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="type">Type</Label>
                                            <Input type="select" name="memberType" id="memberTYpe">
                                                <option value="0">Please select</option>
                                                <option value="1">Officer</option>
                                                <option value="2">Other Rank</option>
                                                <option value="3">Civil</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-1">

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="Rank">Rank</Label>
                                            <Input type="select" name="rank" id="rank">
                                                <option value="0">Please select</option>
                                                <option value="1">pvt</option>
                                                <option value="2">L/Cpl</option>
                                                <option value="3">Cpl</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="nameInitails">Name With Initials</Label>
                                            <Input type="text" id="nameInitial" placeholder="Enter Name with Initials" />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input type="text" id="fullName" placeholder="Enter Full Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="street">Street</Label>
                                    <Input type="text" id="street" placeholder="Enter street name" />
                                </FormGroup>
                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="city">City</Label>
                                            <Input type="text" id="city" placeholder="Enter your city" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="postal-code">Postal Code</Label>
                                            <Input type="text" id="postal-code" placeholder="Postal Code" />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="country">Country</Label>
                                    <Input type="text" id="country" placeholder="Country name" />
                                </FormGroup>

                            </CardBody>
                            <CardFooter>
                                <input type="submit" value="Submit" />
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Form>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Forms;
