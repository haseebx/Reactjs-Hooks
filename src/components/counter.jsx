import React from 'react';

export default function Counter() {
  //class Counter extends Component {
  const state = {
    //created Object
    count: 0,
    //  tags: ['tag1', 'tag2', 'tag3'],
  };
  const handleIncrement = () => {
    this.setState({ count: state.count + 1 });
  };
  const handleSetZero = () => {
    this.setState({ count: 0 });
  };
  // render() {
  const getbadgerClasse = () => {
    let classes = ' badge m-3 badge-';
    classes += state.count === 0 ? 'warning' : 'primary';
    return classes;
  };
  const formatcounter = () => {
    const { count } = state;
    return count === 0 ? 'Zero' : count; //if statement
  };
  return (
    <>
      <div style={{ marginLeft: 850, marginTop: 250 }}>
        <span className={getbadgerClasse()} style={{ fontSize: 20 }}>
          {formatcounter()}
        </span>
        <button
          onClick={handleIncrement()}
          className="btn btn-secondary btn-lg"
        >
          {this.props.ins}
        </button>
        <button
          onClick={handleSetZero()}
          className="btn btn-danger ml-3 btn-lg"
        >
          {this.props.cls}
        </button>
      </div>
    </>
  );
}

//export default Counter;
