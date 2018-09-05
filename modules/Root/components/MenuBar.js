import styled from 'styled-components'
import React, {Component} from 'react'

const MenuWrap = styled.div`
  text-align: center;
  background: #333;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  align-items: center;
`;

const MenuBarText = styled.span`
  color: #fff;
  display: block;
  margin: 3px 10px 0 0;
  & > mark{
    color: #90ee90;
    font-weight: bold;
    background: none;
  }
`

const MenuButton = styled.button`
  border: none;
  background: grey;
  color: #fff;
  width: 95px;
  height: 35px;
  border-radius: 3px;
  font-size: 1em;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s, easy-in-out;
  &:hover{
    background: #90ee90;
    color: #333;
  }
`

export class MenuBar extends Component {
  render () {
    return (
      <MenuWrap>
       <MenuBarText>Logged in as <mark>{this.props.currentUser.name}</mark></MenuBarText>
       <MenuButton onClick={this.props.logout}>Logout</MenuButton>
      </MenuWrap>
    )
  }
}
