import React from 'react'


const Button = (props) => {
  return (
    <div>
        <button className={props.button} onClick={props.handleChange} hidden={props.hidden}>{props.name}</button>
    </div>
  )
}

export default Button