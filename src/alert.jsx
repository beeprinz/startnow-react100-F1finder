import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editEnabled: false,
      // text:'',
      // priority: ''
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleEditTodoPriority = this.handleEditTodoPriority.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  
  }

  // handleEdit(e) {
  //   this.setState({ editEnabled: true });
  // }


  handleEditTodo(e){
    this.setState({ text: e.target.value });
  }

  // handleEditTodoPriority(e) {
  //   this.setState({ priority: e.target.value });
  // }
  
  // handleSave(e){
  //   this.props.onSave(this.props.todo.id, this.state.text, this.state.priority);
  //   this.setState({editEnabled: false}) 
  // //save needs to update the state of the original todo, 
  // //make a copy of todos and match the id of the edited todo to the original 
  // //then setState to the edited version 
  // }


  // handleDelete(e) {
  //   this.props.onDelete(this.props.todo.id);
  // }



  render() {
    // let priority;
    // if (this.props.todo.priority == "medium") {
    //   priority = "alert-warning";
    // } else if (this.props.todo.priority == "high") {
    //   priority = "alert-danger";
    // } else {
    //   priority = "alert-success";
    // }
    
    // if (this.state.editEnabled === true){
    //   return (
    //     <div className={`alert ${priority}`} role="alert" >
    //       <label htmlFor="textArea">Description</label> 
    //       <textarea 
    //         className="update-todo-text" 
    //         id="textArea"
    //         rows="3" 
    //         defaultValue={this.props.todo.text} //defaultvale lets you change the value 
    //         onChange={this.handleEditTodo}
    //       />
    //       <div className="form-group">
    //        <label htmlFor="exampleFormControlSelect1">
    //         How much of a priority is this?!
    //         </label>
    //         <select
    //           className="mt-2 mb-4 form-control create-todo-priority"
    //           id="exampleFormControlSelect1"
    //           onChange={this.handleEditTodoPriority} 
    //             >
    //           <option defaultValue="0" name="priority">Select Priority</option>  
    //           <option defaultValue="high" name="priority">high</option>
    //           <option defaultValue="medium" name="priority">medium</option>
    //           <option defaultValue="low" name="priority">low</option>
    //         </select>
    //       </div>
    //       <button
    //         onClick={this.handleSave}
    //         type="submit"
    //         className="btn btn-primary btn-block">
    //         Save
    //       </button>
    //     </div>
    //   ) 
    // }

    return (
      <div> 
          <p>
            {this.props.todo.text}
          </p>
      </div>
    );
  }
}

export default Alert;

