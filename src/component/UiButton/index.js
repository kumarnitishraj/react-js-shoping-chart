import React from 'react'

const buttonStyle =(props)=>{
    let color = !!props.color ? props.color : 'grey'
    let underline =  !!props.underline && 'underline'
    let margin = !!props.margin ? props.margin :'0px'
    let size = !!props.size ? `${props.size}px`: '40px'

   return {
        width:size,
        backgroundColor:color,
        color:'white',
        border:'0px',
        margin: margin
    }
}

const UiButton = (props) => {
    return (
        <div style={{float:props.align}}>
            <button style={buttonStyle(props)} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
    
}
  
  export default UiButton;