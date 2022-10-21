import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text Here');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.headding}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          rows="10"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </div>
      <div className="btn btn-danger ml-3" onClick={handleLoClick}>
        Convert to LowerCase
      </div>
    </div>
  );
}
