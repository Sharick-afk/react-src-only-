import React from 'react'
import s from './message.module.css'




const MessgaeItem = (props) =>{ 
  return ( 
    <li className={s.message_item} activeclassname='active'>
        {props.message}
    </li>
          )
}
 
export default MessgaeItem