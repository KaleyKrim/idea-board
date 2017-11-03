import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

class Doing extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return (
      <div id="doing">
        {
          this.props.cards.filter((card) => {
            return card.status === 2
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

const ConnectedDoing = connect(
  mapStateToProps,
  null
)(Doing);

export default ConnectedDoing;