import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  "./Spinner.css"


export default props =>
  <div className={`fadeIn ${props.spinning}`}>
    <FontAwesomeIcon icon={faSync} size={props.size} className="spinner"/>
  </div>  