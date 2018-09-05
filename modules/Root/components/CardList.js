import React, {Component} from 'react'
import Card from '../components/Card'
import Grid from '../../../common/Grid'

export class CardList extends Component {
  render () {
    const {
      cardList,
      setCardState,
      getCardList,
      deleteCard
    } = this.props;

    const Cards = [].concat(cardList)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map((card, index) =>
      <div key={index}>
        <Card setCardState={ setCardState }  deleteCard={deleteCard} getCardList={getCardList} card={card}></Card>
      </div>
    );

    return (
      <Grid>
        {Cards}
      </Grid>
    )
  }
}
