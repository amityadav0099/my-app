import React from 'react'

export default function About(props) {
let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'#042743':'white',
}
  
  return (
    <>
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
<div className="accordion" id="accordionExample"style={myStyle}>
<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<strong>Analyze Your Text </strong>
</button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
<div className="accordion-body" style={myStyle}>
Word Counter gives you a way to analyze your text quickly and efficiently by its word count, character count and buttons
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<strong>Free To Use </strong>
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
<div className="accordion-body" style={myStyle}>
Word Counter is a free character counter tool that provides instant character count & word count statistics for a given text.
Word counter reports the number of word and characters. Thus it is suitable for writing text with word/ character limit.
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<strong>Browser Compatible </strong>
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
<div className="accordion-body" style={myStyle}>
This Word Counter software works in any web browsers such as chrome, Firefox, Internet Explorer, safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
</div>
</div>
</div>
</div>
    </div>
    </>
  )
}
