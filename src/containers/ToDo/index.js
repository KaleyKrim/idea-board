import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

class ToDo extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return (
      <div id="to_do">
        {
          this.props.cards.filter((card) => {
            return card.status === 1
          }).map((card) => {
            return(
              <Card title={card.title} assigned_to={card.assigned_to} priority={card.priority}/>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const ConnectedToDo = connect(
  mapStateToProps,
  null
)(ToDo);

export default ConnectedToDo;