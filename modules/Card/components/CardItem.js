
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as cardActions, NAME as CARD_NAME, types} from '../'
import { actions as rootActions} from '../../Root'
import { Checkbox } from '../../../common/Checkbox'
import styled from 'styled-components';

const ItemHolder = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`
const DeleteIcon = styled.div`
  font-size: 2em;
  color: red;
  cursor: pointer;
`

const Title = styled.span`
  font-size 1.6em;
  line-height: 1.4em;
  overflow: hidden;
  flex-grow: 1;
  text-overflow: ellipsis;
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
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

class CardItem extends Component {
  editItem = (e) => {
    const { card, item, editItem, getCardList } = this.props;
    editItem(card.id, item.id, {done: e.target.checked}).then(() => {
      getCardList()
    })
  }

  removeItem = () => {
    const { card, item, removeItem, getCardList } = this.props;
    removeItem(card.id, item.id).then(() => {
      getCardList()
    })
  }
 
  render () {
    const {
      item
    } = this.props;

    return (
      <ItemHolder>
        <Checkbox id={item.id} onChange={this.editItem} checked={item.done} />
        <Title done={item.done}>{item.name}</Title>
        <DeleteIcon className="fas fa-trash" onClick={this.removeItem}></DeleteIcon>
      </ItemHolder>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)