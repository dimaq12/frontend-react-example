import styled from 'styled-components'
import React, {Component} from 'react'
import Popup from "reactjs-popup";
import { ItemList } from './ItemList'
import EditCard from '../../Card/containers/Card';
import { headingHolder } from '../../../common/helpers/styles'

const StyledPopUp = styled(Popup)`
  padding: 0!important;
`
const HeaderWrap = styled.h1`
  ${headingHolder}
`;

const DeleteButton = styled.div`
  color: #f35151;
  z-index: 1;
  display: block;
  font-size: 1.8em;
  position: absolute;
  right: 14px;
  top: 17px;
  cursor: pointer;
  transition: 0.3s, easy-in-out;
  &:hover{
    color: #ff7e7e;
  }
`

const ContentWrap = styled.div`
  position: relative;
`

const CardWrap = styled.div`
  width: 400px;
  margin: 10px;
  position: relative;
  box-shadow: 8px 9px 13px rgba(0,0,0,0.3);
  background: #fff;
`;

const CardFooter = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 35px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
`;
const ContentHolder= styled.div`
  padding: 20px;
`

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  openPopUp = () => {
    const {setCardState, card} = this.props;
    setCardState(card)
  }
  deleteCard = (e) => {
    const { deleteCard, getCardList, card } = this.props;
    e.stopPropagation();
    deleteCard(card.id).then(() => {
      getCardList()
    })
  }
  render () {
    const {
      card
    } = this.props;

    const defaultContetnt = (
       <ContentWrap>
        <HeaderWrap>
          {card.title}
        </HeaderWrap>
        <ContentHolder>
          <ItemList itemList={card.items}></ItemList>
          <CardFooter>
            <span>{card.items.filter((a) => !a.done).length} left</span>
          </CardFooter>
        </ContentHolder>
      </ContentWrap>)

    return (
      <CardWrap onClick={this.openPopUp}>
        <DeleteButton  >
          <span onClick={this.deleteCard} className="fas fa-times"></span>
        </DeleteButton>
        <StyledPopUp modal closeOnDocumentClick trigger={defaultContetnt} position="right center">
          <EditCard></EditCard>
        </StyledPopUp>
      </CardWrap>
    )
  }
}
