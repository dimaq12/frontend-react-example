import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as rootActions} from '../../Root'
import { actions as cardActions, NAME as CARD_NAME } from '../'
import styled from 'styled-components'

import { inputHolder, input, actionButton } from '../../../common/helpers/styles'

const InputHolder = styled.div`
  ${inputHolder}
`
const ModalInput = styled.input`
  ${input}
`
const ActionButton = styled.button`
  ${actionButton}
`


function mapStateToProps (state) {
  return {
    ...state[CARD_NAME]
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...cardActions,
  getCardList: rootActions.getCardList
}, dispatch);

export class AddItem extends Component {
  constructor(props){
     super(props);
     this.state = {
       itemTitle: ''
     }
  }
   
  handleChange = (e) => {
    const {removeError} = this.props;
    removeError();
    this.setState({
      itemTitle: e.target.value
    })
  };

  validate() {
    const {setError} = this.props;
    if(!this.state.itemTitle){
      setError(`Item title can't be empty!`)
      return false;
    }
    return true;
  }

   save = () => {
    const {addItem, getCardList, card} = this.props;
    let self = this;
    if(!this.validate()){
      return;
    }
    addItem(card.id, this.state.itemTitle, false).then(() => {
      getCardList();
      self.setState({
        itemTitle: ''
      })
    })
   }

  render () {
    return (
      <InputHolder>
        <ModalInput placeholder='Task title' value={this.state.itemTitle} onChange={this.handleChange} type="text"/>
        <ActionButton className='act-btn' onClick={this.save}>Add task</ActionButton>
      </InputHolder>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)