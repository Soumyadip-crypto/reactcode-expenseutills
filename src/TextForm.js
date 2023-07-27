import React, { useState } from 'react';

export default function TextForm(props) {
 
  const [text, setText] = useState('Enter text here');

  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.onShowAlert('Converted to UpperCase', 'success');
  };

  const handleDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.onShowAlert('Converted to LowerCase', 'success');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const reverseText = () => {
    let text1 = text.split(" ").reverse().join(" ");
    setText(text1);
    props.onShowAlert("Successfully converted to reverse", "success");
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUp}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDown}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reverseText}>Reverse Text</button>
      </div>
      <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element)=>{
          return element.length!==0;
        }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{
          return element.length!==0;
        }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to Preview!'}</p>
      </div>
    </>
  );
}

