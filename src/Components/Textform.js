import React, {useState} from 'react'


export default function Textform(props) {

  const[text, setText] = useState('');

    const handleupClick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!", "success");
    };
    const handleLoClick=()=>{
      // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  };
  const handleclearClick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("text cleared!", "success");
};
const handleonChange=(e)=>{
    console.log("on changed");
    setText(e.target.value);
    
};
const handleCopy=()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard!", "success");
};
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
};
// const[text, setText] = useState('');
// text = "dfdjklk"wrong way
// setText = "fjkdsd"correct way
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
    <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">
{/* <label for="myBox" className="form-label">Example textarea</label> */}
<textarea className="form-control" value= {text} onChange={handleonChange}
 style={{backgroundColor : props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8">
  
</textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick} >{props.buttonname}</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick} >{props.buttonname3}</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >{props.buttonname2}</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra spaces</button>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
  <h1>Your Text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length}characters</p>
  {/* <p>{text.split(" ").filter(word => word.trim() !== "").length}: words, {text.length} Characters</p> */}
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes takes to read</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
</div>
    </>
  );
}
