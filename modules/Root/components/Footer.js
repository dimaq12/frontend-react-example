import styled from 'styled-components'
import React, {Component} from 'react'

const FooterWrap = styled.div`
  border-top: 2px solid #ccc, 0.6)};
  padding: 10px;
`

const FooterInner = styled.div`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export class Footer extends Component {
  render () {
    const {
      text
    } = this.props

    return (
      <FooterWrap>
        <FooterInner>
          {text}
        </FooterInner>
      </FooterWrap>
    )
  }
}
