import React, {Component} from 'react'
import { Checkbox } from '../../../common/Checkbox'
import styled from 'styled-components';

const ItemHolder = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  display: flex;
`

const Title = styled.span`
  font-size 1.6em;
  line-height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

export default class CardItem extends Component {
   constructor(props){
     super(props);
   }

  render () {
    const {
      item
    } = this.props;

    return (
      <ItemHolder>
        <Checkbox readOnly={true} checked={item.done} type="checkbox"></Checkbox>
        <Title done={item.done}>{item.name}</Title>
      </ItemHolder>
    )
  }
}
