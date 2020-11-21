import React, { useState } from 'react';
import './style.css';

const Joke = (props) => {
  const [like, setLike] = useState(props.likes);
  const [unlike, setUnlike] = useState(props.dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={`./assets/img/${props.id}.png`} />
          <p className="user-name">{props.name}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => {
            setLike(like + 1);
          }}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {like}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => {
            setUnlike(unlike + 1);
          }}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {unlike}
        </span>
      </div>
    </div>
  );
};

export default Joke;
