import React, { Component } from "react"
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { addTask } from "../store/TodoReducer";

let AddNewTaskForm = props => {
    const { handleSubmit } = props;

    return <form onSubmit={ handleSubmit }>
                <Field  name="firstName" 
                        component="input"
                        type="text"
                        placeholder = "Type..." />
                <button type="submit">add ToDo</button>
            </form>
}

AddNewTaskForm = reduxForm({ 
    form: "newTaskForm",
    onSubmitSuccess:  (result, dispatch) => dispatch(reset("newTaskForm"))
})(AddNewTaskForm)

class NewTaskForm extends Component {
    submit = values => {
        values.firstName && this.props.addTask(values.firstName);
    }
    render(){
        return <AddNewTaskForm onSubmit={ this.submit } {...this.props} />
    }    
}

export default NewTaskForm = connect( state => ({}), { addTask })(NewTaskForm)
