import React from 'react'
import './App.css'

export default function Index({name,backgroundColor}) {
    const divStyle = {
        backgroundColor: backgroundColor,
      };
  return (
    <div className='indexes'>
    <div className='Icolor' style={divStyle}></div>
    <div className='Iname'>{name}</div>
    </div>
  )
}