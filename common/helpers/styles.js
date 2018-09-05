import {
    css
} from 'styled-components'


export const actionButton =  `
    width: 150px;
    background: #333;
  color: #fff;
  display: block;
  font-size: 1.6em;
  border: none;
  padding: 10px;
  cursor: pointer;
`

export const headingHolder = `
position: relative;
  background: #393939;
  color: #fff;
  padding: 15px 35px 15px 5px;
  box-sizing: border-box;
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;`

export const inputHolder = `
  display: flex;
  margin: 10px 0;
  border-bottom: 2px solid #efefef;
`
export const buttonHolder = `
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const error = `
    margin-top 10px;
    color: red;
    &>span{
        color: red;
    }
`

export const styledIcon = `
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  &:before{
    font-size: 1.4em;
    line-height: 2em;
  }
`

export const heading =  `
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    padding-bottom: 35px;`

export const input = `
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    box-shadow: none;
    position: relative;
    color: #333;
    font-size: 18px;
    background-color: transparent !important;
    border-radius: 0;
    height: 40px;
    transition: .3s all;
    padding: 6px 12px 6px 12px;
    &:-webkit-autofill{
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #333 !important;
    }
`

export const label = `
  width: 100%;
  display: block;
  font-size: 1.2em;
  margin-top: 15px;
`

export const button = `
    display: block;
    padding: 12px 0;
    width: 100%;
    border-radius: 25px;
    margin-top: 20px;
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    height: 50px;
    background: #90ee90;
    box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    border: none;
    cursor pointer;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
`

export const signUpBtn =`
    color: #fff;
    display: block;
    width: 100%;
    font-size: 22px;
    background: lightgreen;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 20px 0;
    border: none;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    `


export const formWrap = `
  position: absolute;
  width: 30vw;
  padding: 3% 3% 100px 3%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(192, 192, 192, 0.6);
  border-radius: 10px;`


  export const popUpWrap = `
    background:#e6e6e6;
  `