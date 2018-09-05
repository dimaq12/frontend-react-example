import React, { Component } from 'react'
import { connect } from 'react-redux'
import { configure } from 'enzyme';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { MenuBar } from '../components/MenuBar'
import { Footer } from '../components/Footer'
import { CardList } from '../components/CardList'
import { getToken } from '../../../service'
import Card from '../../Card/containers/Card';
import Popup from "reactjs-popup";
import { headingHolder, inputHolder, input, actionButton  } from '../../../common/helpers/styles'

import styled from 'styled-components'

import { actions as rootActions, NAME as ROOT_NAME } from '../'
import { actions as authActions, getCurrentUser } from '../../Auth'
import { actions as cardActions } from '../../Card'

const InputHolder = styled.div`
  ${inputHolder}
`
const ModalInput = styled.input`
  ${input}
`
const ActionButton = styled.button`
  ${actionButton}
`
const AddTodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledPopup = styled(Popup)`
  padding: 0!important;
`;

const HeaderWrap = styled.h1`
  ${headingHolder}
`;

const CardWrap = styled.div`
  width: 400px;
  margin: 10px;
  position: relative;
  box-shadow: 8px 9px 13px rgba(0,0,0,0.3);
  background: #fff;
`;

const ContentHolder= styled.div`
  padding: 20px;
`

function mapStateToProps (state) {
  return {
    ...state[ROOT_NAME],
    currentUser: getCurrentUser(state)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...rootActions,
  getUserByToken: authActions.getUserByToken,
  logout: authActions.logout,
  setCardState: cardActions.setCardState,
  clearCardState: cardActions.clearCardState,
  deleteCard: cardActions.deleteCard
}, dispatch);

export class Root extends Component {
  componentDidMount () {
    const { getUserByToken, getCardList, clearCardData, logout } =  this.props;
    clearCardData()
    getUserByToken(getToken()).then((res)=>{
      if(res.error){
        logout()
      }
    })
    getCardList().then((res) => {
      if(res.payload.status === 401){
        logout()
      }
    })
  }

  render () {
    const {
      cardList,
      currentUser,
      logout,
      setCardState,
      clearCardState,
      getCardList,
      deleteCard
    } = this.props;
    let header;

    if (getToken()) {
      header = <MenuBar currentUser={currentUser} logout={logout}/>
    } else {
      header = <Redirect to={{ pathname: '/login' }} />
    }

    const defaultContetnt = (
      <AddTodoWrap>
        <CardWrap>
        <HeaderWrap>Add Card</HeaderWrap>
        <ContentHolder>
          <InputHolder>
            <ModalInput type="text"/>
            <ActionButton >Add</ActionButton>
          </InputHolder>
        </ContentHolder>
        </CardWrap>
      </AddTodoWrap>)

    return (
      <div>
        {header}
        <StyledPopup modal closeOnDocumentClick onOpen={clearCardState} trigger={defaultContetnt} position="right center">
          <Card />
        </StyledPopup>
        <CardList setCardState={setCardState} deleteCard={deleteCard} getCardList={getCardList} cardList={cardList} />
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
