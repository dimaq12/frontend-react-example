import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ItemList } from '../components/ItemList'
import AddItem  from '../components/AddItem'
import { actions as rootActions} from '../../Root'
import styled from 'styled-components'
import _ from 'lodash'

import { popUpWrap, inputHolder, input, headingHolder, actionButton, error } from '../../../common/helpers/styles'

const ErrorBlock = styled.div`
  ${error}
`

const PopUpWrap = styled.div`
  ${popUpWrap}
`
const InputHolder = styled.div`
  ${inputHolder}
`

const ModalInput = styled.input`
  ${input}
`

const ActionButton = styled.button`
  ${actionButton}
`

const ContentHolder= styled.div`
  padding: 20px;
`

const HeaderWrap = styled.h1`
  ${headingHolder}
`;


import { actions as cardActions, NAME as CARD_NAME } from '../'

function mapStateToProps (state) {
  return {
    ...state[CARD_NAME]
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...cardActions,
  getCardList: rootActions.getCardList
}, dispatch);

export class Card extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.saveHandler = _.debounce(this.saveHandler, 1000);
    this.props.removeError();
  }

  saveHandler = () => {
    const { card, saveCard, getCardList } = this.props;
    if(!this.validate()){
      return;
    }
    saveCard(card.title, card.id).then(()=>{
      getCardList()
    })
  }

  validate(){
    const {card, setError} = this.props;
    if(!card.title){
      setError(`Title can't be empty`);
      return false;
    }
    return true;
  }

  handleCardInput = (e) => {
    const { setTitle } = this.props;
    this.props.removeError();
    setTitle(e.target.value);
    this.saveHandler();
  }


  render () {
    const { action, card, error } = this.props;
    return (
      <PopUpWrap>
        <HeaderWrap>{action}</HeaderWrap>
          <ContentHolder>
          <InputHolder>
            <ModalInput autoFocus value={card.title} onChange={this.handleCardInput} type="text"/>
          </InputHolder>
          
          <ItemList itemList={card.items}></ItemList>
          {card.id &&
            <AddItem/>
          }
          {error &&
            <ErrorBlock className='err-block'>{error}</ErrorBlock>
            }
        </ContentHolder>
      </PopUpWrap>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
