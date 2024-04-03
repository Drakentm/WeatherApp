import React from 'react';

export default function PropElement() {
  const imgUrl = "https://picsum.photos/200";
  const style = {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'red'
  };

  function handleIncriment() {
    console.log('Increment Clicked');
  }

  let list = ['one', 'two', 'three'];

  function renderTags() {
    if (list.length === 0) return <p>There are no tags</p>;
    return <ul>{list.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  return (
    <div>
      <img src={imgUrl} alt="" />
      <span className="badge badge-primary m-4" style={{ backgroundColor: 'green' }}> Zero</span>
      <button onClick={handleIncriment} className='btn btn-secondary btn-lg' style={{ width: '100px', backgroundColor: '#006B' }}>Click Me</button>
      <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore sed neque deleniti
        adipisci placeat similique natus dolores dolor?</p>
      {renderTags()}
    </div>
  );
}
