import React, { Component } from 'react';

const subTextStyle ={
    color:'grey',
    fontSize:'14px',
   

}

const textStyle =(props)=>{
    let color       = !!props.color ? props.color : 'grey'
    let underline   = !!props.underline && 'underline'
    let margin      = !!props.margin ? props.margin :'0px'


   return {
        color           : `${color}`,
        fontWeight      : `${props.bold}`,
        fontSize        : `${props.size*4}px`,
        textDecoration  : `${underline}`,
        letterSpacing   : `${props.letterSpace}`,
        margin          : `${margin}`,
        cursor          : `pointer`,
        'text-transform': `uppercase`,
    }
}

const UiText =(props) =>{
    return (
      <div style={{float:props.align}}>
         <p style={textStyle(props)} onClick={props.onClick}>
             {props.text}
         </p>
        {
            props.subText && 
            <p style={subTextStyle}>
                {props.subText}
            </p>
        } 
      </div>
    );
  }

export default UiText;
