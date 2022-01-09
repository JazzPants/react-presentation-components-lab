// Code SimplerComponent Here
import React from 'react'
//Not extending this functional component so don't need {Component}

//props which is the handleClick property passed from index.js
//no class in this functional component means no use of "this" to reference the class
const SimplerComponent = props => 
<div onClick={props.handleClick}>I am just happy.</div>

export default SimplerComponent