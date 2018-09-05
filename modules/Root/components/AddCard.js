import styled from 'styled-components'
import React, {Component} from 'react'
import Card from '../../Card/containers/Card';

const AddTodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const AddTodoText = styled.div`
  color: green
`;

export class AddCard extends Component {
  constructor (props) {
    super(props);
    this.state= {
      showCard: false
    };
  }

  handleClick = () => {
    this.setState({
      showCard: true
    });
  };

  handleClose = () => {
    this.setState({
      showCard: false
    });
  };

  render () {
    let { showCard } = this.state;
    let element;
    if (showCard) {
      element = <Card onClose={this.handleClose}/>
    } else {
      element = <AddTodoText onClick={this.handleClick} >Add New Todo</AddTodoText>
    }

    return (
      <AddTodoWrap>
        {element}
      </AddTodoWrap>
    )
  }
}
