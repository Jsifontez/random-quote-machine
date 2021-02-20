import React from 'react'

const Icon = (props) => {
  return (
    <svg
      fill={props.color}
      height={props.size}
      width={props.size}
      viewBox={props.view}
      version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  )
}

export default Icon
