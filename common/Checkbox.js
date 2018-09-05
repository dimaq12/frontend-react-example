import React, { Component } from 'react'
import styled from 'styled-components'

const CheckBoxWrap = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #5fba6b;
`
const CheckBox = styled.input`
    display: none;
    &:checked + label:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }
`
const PseudoCheckBox = styled.label`
    display: inline-block;
    position: relative;
    top: -1px;
    width: 30px;
    height: 30px;
    margin: -1px 0px 0 0;
    vertical-align: middle;
    cursor: pointer;
    &:after{
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
        left: -8px;
        top: -3px;
        position: absolute;
        width: 30px;
        height: 30px;
    }
`

export const Checkbox = (props)=>(
    <CheckBoxWrap>
        <CheckBox id={props.id} onChange={(e) => props.onChange(e)} checked={props.checked} type="checkbox"/>
        <PseudoCheckBox htmlFor={props.id}/>
    </CheckBoxWrap>
)