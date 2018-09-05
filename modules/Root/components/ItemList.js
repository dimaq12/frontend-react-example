import React, {Component} from 'react'
import CardItem from '../components/CardItem'

export class ItemList extends Component {
  render () {
    const {
      itemList,
      setCardState
    } = this.props;

    const Items = itemList.map(item =>
      <div key={item.id}>
         <CardItem key={item.id} index={item.id} setCardState={ setCardState } item={item}/>
      </div>
    );

    return (
      <div>{Items}</div>
    )
  }
}
