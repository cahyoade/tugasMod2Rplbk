import React, { Component } from "react";
import '../App.css';
function Square(props){
    return(
        <>
        <h2>Hai hehe</h2>
        <p>Saya komponen {props.komponen}</p>
        <a href={props.link}> click </a>
        </>
    )
}
export default class CompAndProps extends Component{
render(){
   const bgColor = {
    backgroundColor: this.props.bgColor,
    width: '150px',
    padding: '8px 6px'
   }

   return(
        <div className="wrapper">
            <div className="User-info" style={bgColor}>
            <Square komponen='kiri' link='/kiri' />
            </div>
            <div className="User-info" style={bgColor}>
            <Square komponen='kanan' link='/kanan' />
            </div>
        </div>
   )

}

}