import React from 'react'
import buttonStyle from '@/styles/Button.module.css'

const Button = (props) => {
  return (
    <div>
        <button className={props.button}>{props.name}</button>
    </div>
  )
}

export default Button