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
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
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
        <div className="btn btn-info mx-3 text-light" onClick={handleLoClick}>
          Convert to LowerCase
        </div>
        <div className="btn btn-danger " onClick={handleClearClick}>
          Clear
        </div>
      </div>

      <div className="container my-3">
        <p>
          {
            text.split(' ').filter((element) => {
              return element.length != 0;
            }).length
          }{' '}
          Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
