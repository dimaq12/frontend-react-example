import React, {Component} from 'react'
import CardItem from '../components/CardItem'

export class ItemList extends Component {
  render () {
    const {
      itemList
    } = this.props;

    const Items = itemList.map((todoItem, index) =>
      <div key={index}>
        <CardItem  item={todoItem}></CardItem>
      </div>
    );

    return (
      <div>{Items}</div>
    )
  }
}
