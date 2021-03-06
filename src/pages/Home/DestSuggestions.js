import React from 'react'

const DestSuggestions = (props) => {
  const options = props.destresults.map(r => (
    <li key={r.id}>
      <div id="ui-id-345" tabindex="-1" class="ui-menu-item-wrapper">
        <a >
          <img style={{margin:"5px"}}src="images/plan-middle-icon.png"/>
            <p>{r.Code}</p>
            <span>{r.City},{r.Name}</span>
            </a>
            </div>   
    </li>
  ))
  return <ul>{options}</ul>
}
export default  DestSuggestions;