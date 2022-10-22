import React, { useState } from 'react';

export default function Counter(props) {
  const [Count, setCount] = useState(0);

  //class Counter extends Component {
  /*const state = {
    //created Object
    count: 0,
    //  tags: ['tag1', 'tag2', 'tag3'],
  };*/
  const handleIncrement = () => {
    // alert('Working');
    let temp = Count + 1;
    setCount(temp);
  };
  const handleSetZero = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    if (Count >= 1) {
      let temp = Count - 1;
      setCount(temp);
    } else {
      return false;
    }
  };
  // render() {
  /*
  const getbadgerClasse = () => {
    let classes = ' badge m-3 badge-';
    classes += Count === 0 ? 'warning' : 'primary';
    return classes;
  };
  const formatcounter = () => {
    const { count } = Count;
    return count === 0 ? 'Zero' : count; //if statement
  };*/

  return (
    <>
      <div style={{ marginLeft: 400, marginTop: 250 }}>
        <span
          className="badge mx-3 text-primary"
          style={{ fontSize: 40, marginBottom: 30 }}
        >
          {Count}
        </span>
        <div>
          <button
            onClick={handleIncrement}
            className="btn btn-secondary btn-lg "
          >
            {props.ins}
          </button>
          <button
            onClick={handleDecrement}
            className="btn btn-info mx-3 btn-lg"
          >
            {props.dec}
          </button>
          <button
            onClick={handleSetZero}
            className="btn btn-danger mx-3 btn-lg"
          >
            {props.cls}
          </button>
        </div>
      </div>
    </>
  );
}

//export default Counter;
