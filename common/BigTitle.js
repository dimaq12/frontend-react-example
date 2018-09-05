import styled from 'styled-components'
import React, {Component} from 'react'

const TitleElement = styled.div`
  font-size: ${props => props.size}px
`

export class BigTitle extends Component {
  render () {
    const {
      text
    } = this.props

    return (
      <TitleElement size={'20'}>{text}</TitleElement>
    )
  }
}
