import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerName: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    }
    componentDidMount() {
        fetch('./fake_db.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    ownerName: data.ownerName
                });
            });
    }
    handleFullNameChange(e) {
        this.setState({ ownerName: e.target.value }, () => console.log('name:', this.state.ownerName));
    }
   handleAgeRangeSelect(e) {
        this.setState({ ownerAgeRangeSelection: e.target.value }, () => console.log('age range', this.state.ownerAgeRangeSelection));
    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            ownerName: '',
            selectedPets: [],
            ownerAgeRangeSelection: '',
            siblingSelection: [],
            currentPetCount: 0,
            description: ''
        });
    }
    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            ownerName: this.state.ownerName
        };

        console.log('Send this in a POST request:', formPayload);
        this.handleClearForm(e);
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h5>Member Registration Form</h5>
                <table>
                    <tr>
                        <td>
                            <SingleInput
                                inputType={'text'}
                                title={'Member Number'}
                                name={'memberNo'}
                                controlFunc={this.handleFullNameChange}
                                content={this.state.ownerName}
                                placeholder={'This is system generated number'} />
                        </td>
                        <td>
                            <SingleInput
                                inputType={'text'}
                                title={'Date of Creation'}
                                name={'dateOfCreation'}
                                controlFunc={this.handleFullNameChange}
                                content={this.state.ownerName}
                                placeholder={'This is system generated date'} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SingleInput
                            inputType={'text'}
                            title={'Regimental No'}
                            name={'regimentNo'}
                            controlFunc={this.handleFullNameChange}
                            content={this.state.ownerName}
                            placeholder={'Type the regimental number here'} />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <SingleInput
                                inputType={'text'}
                                title={'Full name'}
                                name={'name'}
                                controlFunc={this.handleFullNameChange}
                                content={this.state.ownerName}
                                placeholder={'Type first and last name here'} />
                        </td>

                    </tr>
                    <tr>
                    <td>
                        <button
                            className="btn btn-primary float-right"
                            onClick={this.handleClearForm}>Create</button>
                    </td>
                    <td>
                        <button
                            className="btn btn-primary float-left"
                            onClick={this.handleClearForm}>Clear form</button>
                    </td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default FormContainer;