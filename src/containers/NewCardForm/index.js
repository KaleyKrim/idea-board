import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/cards.js';

import Select from '../../components/Select';

class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      priority: '',
      assignedTo: '',
      showCardForm: false
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeAssigned = this.handleChangeAssigned.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCardForm = this.toggleCardForm.bind(this);
  }

  handleChangeTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  handleChangePriority(event){
    this.setState({
      priority: event.target.value
    })
  }

  handleChangeAssigned(event){
    this.setState({
      assignedTo: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newCard = {
      title: this.state.title,
      priority: this.state.priority || 1,
      assignedTo: this.state.assignedTo || 1
    };

    this.props.addCard(newCard);

    this.setState({
      title: ''
    })
  }

  toggleCardForm(event){
    event.preventDefault();

    if(!this.state.showCardForm){
      this.setState({
        title: '',
        priority: '',
        assignedTo: '',
        showCardForm: true
      })
    }else{
      this.setState({
        title: '',
        priority: '',
        assignedTo: '',
        showCardForm: false
      })
    }
  }

  render(){
    return (
      <div id="new-card-form">

        <div className="add-button">
          <input type="Submit" value="Add Tasks" class="button" onClick={this.toggleCardForm}/>
        </div>

        { this.state.showCardForm ?
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.title} placeholder="Task description" onChange={this.handleChangeTitle}/>
            <Select name="user" label="Assign to" handler={this.handleChangeAssigned} list={this.props.users} show="name"/>
            <Select name="priority" label="Priority" handler={this.handleChangePriority} list={this.props.priorities} show="title"/>
            <input type="submit" class="button" value="Add to 'To Do'"/>
          </form>
        </div>
        : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    priorities: state.priorities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedNewCardForm;